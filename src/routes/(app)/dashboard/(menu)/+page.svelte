<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <h1 class="text-2xl font-bold">Dashboard</h1>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Quick Stats -->
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Quick Stats</h2>
        <div class="stats stats-vertical shadow">
          <div class="stat">
            <div class="stat-title">Active Projects</div>
            <div class="stat-value">0</div>
            <div class="stat-desc">No active projects</div>
          </div>
          <div class="stat">
            <div class="stat-title">Total Usage</div>
            <div class="stat-value">0</div>
            <div class="stat-desc">No usage recorded</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Recent Activity</h2>
        <div class="overflow-x-auto">
          <table class="table">
            <tbody>
              <tr>
                <td>No recent activity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Quick Actions</h2>
        <div class="flex flex-col gap-2">
          <a href="/dashboard/billing" class="btn btn-primary">Manage Billing</a
          >
          <a href="/dashboard/settings" class="btn btn-outline"
            >Update Profile</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
