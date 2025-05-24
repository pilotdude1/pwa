import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, locals: { supabase } }) => {
    const { profile, session } = await parent();
    
    if (!profile) {
        // If profile doesn't exist, create it
        const { data: newProfile, error: createError } = await supabase
            .from('profiles')
            .insert({
                id: session.user.id,
                full_name: session.user.email?.split('@')[0] || '',
                updated_at: new Date().toISOString()
            })
            .select()
            .single();

        if (createError) {
            throw error(500, 'Error creating profile');
        }

        return { profile: newProfile };
    }

    return { profile };
}; 