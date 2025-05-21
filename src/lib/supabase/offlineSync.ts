import { createClient } from '@supabase/supabase-js';
import { openDB } from 'idb';
import type { IDBPDatabase } from 'idb';

const DB_NAME = 'pwa-supabase-sync';
const STORE_NAME = 'pendingOperations';

interface PendingOperation {
  id: string;
  type: 'insert' | 'update' | 'delete';
  table: string;
  data: any;
  timestamp: number;
}

class SupabaseOfflineSync {
  private supabase;
  private db: IDBPDatabase | null = null;

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.initDB();
  }

  private async initDB() {
    this.db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      },
    });
  }

  async queueOperation(operation: Omit<PendingOperation, 'id' | 'timestamp'>) {
    if (!this.db) throw new Error('Database not initialized');
    
    const pendingOp: PendingOperation = {
      ...operation,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    await this.db.add(STORE_NAME, pendingOp);
    this.requestSync();
  }

  private requestSync() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        // @ts-ignore - SyncManager is not included in TypeScript definitions
        registration.sync.register('sync-supabase');
      });
    }
  }

  async syncPendingOperations() {
    if (!this.db) throw new Error('Database not initialized');
    
    const pendingOps = await this.db.getAll(STORE_NAME);
    
    for (const op of pendingOps) {
      try {
        switch (op.type) {
          case 'insert':
            await this.supabase.from(op.table).insert(op.data);
            break;
          case 'update':
            await this.supabase.from(op.table).update(op.data).eq('id', op.data.id);
            break;
          case 'delete':
            await this.supabase.from(op.table).delete().eq('id', op.data.id);
            break;
        }
        
        await this.db.delete(STORE_NAME, op.id);
      } catch (error) {
        console.error('Sync failed for operation:', op, error);
      }
    }
  }

  // Helper methods for common operations
  async insert(table: string, data: any) {
    if (navigator.onLine) {
      return this.supabase.from(table).insert(data);
    } else {
      await this.queueOperation({
        type: 'insert',
        table,
        data,
      });
      return { data: data, error: null };
    }
  }

  async update(table: string, data: any) {
    if (navigator.onLine) {
      return this.supabase.from(table).update(data).eq('id', data.id);
    } else {
      await this.queueOperation({
        type: 'update',
        table,
        data,
      });
      return { data: data, error: null };
    }
  }

  async delete(table: string, id: string) {
    if (navigator.onLine) {
      return this.supabase.from(table).delete().eq('id', id);
    } else {
      await this.queueOperation({
        type: 'delete',
        table,
        data: { id },
      });
      return { data: { id }, error: null };
    }
  }
}

export default SupabaseOfflineSync; 