<script>
import TheWelcome from '../components/TheWelcome.vue'
import Layout from '@/layouts/Layout.vue'

export default {
  title: 'Dashboard',
  components: {
    Layout,
    TheWelcome,
  },
}
</script>

<template>
  <Layout h1="Dashboard">
    <TheWelcome />
  </Layout>
</template>
