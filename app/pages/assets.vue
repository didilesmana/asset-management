<script setup lang="ts">
import { LucideLaptop, LucidePlus, LucideFilter, LucideSearch, LucideMoreHorizontal } from 'lucide-vue-next'

definePageMeta({
  header: 'All Assets'
})

const columns = [
  { key: 'assetTag', label: 'Asset Tag' },
  { key: 'name', label: 'Asset Name' },
  { key: 'model', label: 'Model' },
  { key: 'category', label: 'Category' },
  { key: 'status', label: 'Status' },
  { key: 'checkedOutTo', label: 'Checked Out To' },
  { key: 'actions', label: '' }
]

const assets = [
  { 
    id: 1, 
    assetTag: 'AST-001', 
    name: 'MacBook Pro M3', 
    model: '16-inch, 2024', 
    category: 'Laptop', 
    status: 'Deployed', 
    checkedOutTo: 'Budi Santoso' 
  },
  { 
    id: 2, 
    assetTag: 'AST-002', 
    name: 'Dell UltraSharp', 
    model: 'U2723QE', 
    category: 'Monitor', 
    status: 'Ready to Deploy', 
    checkedOutTo: '-' 
  },
  { 
    id: 3, 
    assetTag: 'AST-003', 
    name: 'iPad Air 5', 
    model: '64GB, Wi-Fi', 
    category: 'Tablet', 
    status: 'Pending', 
    checkedOutTo: 'Siti Aminah' 
  },
  { 
    id: 4, 
    assetTag: 'AST-004', 
    name: 'Logitech MX Master 3S', 
    model: 'Black', 
    category: 'Accessory', 
    status: 'Deployed', 
    checkedOutTo: 'Andi Wijaya' 
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Deployed': return 'primary'
    case 'Ready to Deploy': return 'success'
    case 'Pending': return 'warning'
    default: return 'neutral'
  }
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 max-w-sm w-full">
        <UInput
          icon="i-lucide-search"
          size="sm"
          color="neutral"
          variant="outline"
          placeholder="Search assets..."
          class="w-full"
        />
        <UButton
          icon="i-lucide-filter"
          color="neutral"
          variant="outline"
          size="sm"
        >
          Filters
        </UButton>
      </div>
      
      <UButton
        icon="i-lucide-plus"
        color="primary"
        size="sm"
      >
        Create New
      </UButton>
    </div>

    <UCard p-0>
      <UTable :rows="assets" :columns="columns" class="w-full">
        <template #status-data="{ row }">
          <UBadge :color="getStatusColor(row.status)" variant="subtle" size="xs">
            {{ row.status }}
          </UBadge>
        </template>
        
        <template #actions-data="{ row }">
          <UDropdown :items="[[{ label: 'Edit', icon: 'i-lucide-edit' }, { label: 'Clone', icon: 'i-lucide-copy' }], [{ label: 'Delete', icon: 'i-lucide-trash', color: 'error' }]]">
            <UButton color="neutral" variant="ghost" icon="i-lucide-more-horizontal" square size="sm" />
          </UDropdown>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
