<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/' },
  { label: 'Assets', icon: 'i-lucide-laptop', to: '/assets' },
  { label: 'Licenses', icon: 'i-lucide-key', to: '/licenses' },
  { label: 'Accessories', icon: 'i-lucide-mouse', to: '/accessories' },
  { label: 'Users', icon: 'i-lucide-users', to: '/users' },
  { label: 'Settings', icon: 'i-lucide-settings', to: '/settings' }
]
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-background">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-border bg-card flex flex-col shrink-0">
      <div class="p-4 border-b border-border flex items-center gap-2">
        <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <UIcon name="i-lucide-package" class="text-white text-xl" />
        </div>
        <span class="font-bold text-lg tracking-tight">AssetMaster</span>
      </div>
      
      <div class="flex-1 overflow-y-auto p-4 space-y-1">
        <UButton
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          :icon="item.icon"
          color="neutral"
          variant="ghost"
          class="w-full justify-start"
          active-class="bg-neutral-100 dark:bg-neutral-800"
        >
          {{ item.label }}
        </UButton>
      </div>
      
      <div class="p-4 border-t border-border">
        <div class="flex items-center gap-3 px-2 py-1">
          <UAvatar src="https://github.com/didilesmana.png" alt="Admin" size="sm" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate">Admin User</p>
            <p class="text-xs text-muted-foreground truncate">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <header class="h-16 border-b border-border bg-background flex items-center justify-between px-6 shrink-0">
        <h1 class="text-lg font-semibold">
          <slot name="header">Dashboard</slot>
        </h1>
        
        <div class="flex items-center gap-4">
          <UColorModeButton />
          <UButton icon="i-lucide-bell" variant="ghost" color="neutral" square />
          <UButton icon="i-lucide-log-out" variant="ghost" color="neutral" square />
        </div>
      </header>
      
      <div class="flex-1 overflow-y-auto p-6">
        <slot />
      </div>
    </main>
  </div>
</template>
