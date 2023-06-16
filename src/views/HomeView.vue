<script>
import Layout from '@/layouts/Layout.vue'

export default {
  title: 'Dashboard',
  components: {
    Layout,
  },
  data() {
    return {
      navigation: [
        { name: 'Active', href: '/list/active' },
        { name: 'Completed', href: '/list/completed' },
        { name: 'High Priority', href: '/list/high-priority' },
        { name: 'Medium Priority', href: '/list/med-priority' },
        { name: 'Low Priority', href: '/list/low-priority' },
      ]
    }
  }
}
</script>

<template>
  <Layout h1="Dashboard">
 <div class="text-slate-500 py-6 flex flex-col gap-4">
    <p>Your Tasks (Recently modified tasks)</p>
    <p>Shortcuts and counts of common task status/types</p>

    <template v-for="link in navigation" :key="link.href">
      <router-link :to="link.href">{{ link.name }}</router-link>
    </template>
  </div>

  </Layout>
</template>
