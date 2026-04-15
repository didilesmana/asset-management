<script setup lang="ts">
const stats = [
  { label: 'Total Assets', value: '1,284', icon: 'i-lucide-laptop', color: 'primary' },
  { label: 'Licensed Software', value: '452', icon: 'i-lucide-key', color: 'info' },
  { label: 'Accessories', value: '621', icon: 'i-lucide-mouse', color: 'warning' },
  { label: 'Pending Requests', value: '12', icon: 'i-lucide-clock', color: 'error' }
]

const recentActivity = [
  { user: 'Budi Santoso', action: 'Checked out', item: 'MacBook Pro 16"', date: '2 mins ago' },
  { user: 'Siti Aminah', action: 'Returned', item: 'Dell Monitor 24"', date: '1 hour ago' },
  { user: 'System', action: 'Alert', item: 'Adobe CC License Expiring', date: '3 hours ago' },
  { user: 'Andi Wijaya', action: 'Checked out', item: 'Logitech MX Master', date: '5 hours ago' }
]
</script>

<template>
  <div class="space-y-6">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard v-for="stat in stats" :key="stat.label">
        <div class="flex items-center gap-4">
          <div :class="`p-3 rounded-full bg-${stat.color}-50 dark:bg-${stat.color}-950`">
            <UIcon :name="stat.icon" :class="`text-2xl text-${stat.color}-500`" />
          </div>
          <div>
            <p class="text-sm font-medium text-muted-foreground">{{ stat.label }}</p>
            <p class="text-2xl font-bold">{{ stat.value }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Recent Activity -->
      <UCard class="lg:col-span-2">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">Recent Activity</h3>
            <UButton variant="link" color="neutral" size="sm">View All</UButton>
          </div>
        </template>
        
        <div class="divide-y divide-border">
          <div v-for="(activity, i) in recentActivity" :key="i" class="py-3 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <UAvatar :alt="activity.user" size="xs" />
              <div>
                <p class="text-sm font-medium">
                  <span class="font-bold">{{ activity.user }}</span> 
                  {{ activity.action }} 
                  <span class="text-primary">{{ activity.item }}</span>
                </p>
                <p class="text-xs text-muted-foreground">{{ activity.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Quick Actions / Shortcuts -->
      <UCard>
        <template #header>
          <h3 class="font-semibold">Quick Actions</h3>
        </template>
        
        <div class="space-y-3">
          <UButton block icon="i-lucide-plus" color="primary">Add New Asset</UButton>
          <UButton block icon="i-lucide-user-plus" variant="outline">Register User</UButton>
          <UButton block icon="i-lucide-file-text" variant="outline">Generate Report</UButton>
          <UButton block icon="i-lucide-scan" variant="outline">Scan Barcode</UButton>
        </div>
        
        <div class="mt-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-dashed border-border flex flex-col items-center">
          <UIcon name="i-lucide-database" class="text-3xl text-muted-foreground mb-2" />
          <p class="text-xs text-center text-muted-foreground">Database: <span class="font-mono text-primary">SQLite</span></p>
          <p class="text-[10px] text-center text-muted-foreground">Ready for MySQL migration</p>
        </div>
      </UCard>
    </div>
  </div>
</template>
