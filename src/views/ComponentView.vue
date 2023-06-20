<script>
import { ref, onMounted } from 'vue';
import { fetchWrapper } from '@/helpers';
import { useRoute } from 'vue-router';
import Layout from '@/layouts/Layout.vue'
const baseUrl = import.meta.env.VITE_AUTH_API_URL;
import Dot from '@/components/Dot.vue'
import Badge from '@/components/Badge.vue'
import BadgePriority from '@/components/BadgePriority.vue'
import ActivityFeed from '@/components/ActivityFeed.vue'
import Button from '@/components/Button.vue'

export default {
  title: 'Components',
  components: {
    Layout,
    Badge,
    BadgePriority,
    Button,
    Dot,
    ActivityFeed,
  },
}
</script>

<template>
    <Layout h1="Components">

      <template #topleft>
        <div class="flex gap-2 mt-2">
        </div>
      </template>

      <template #topright>
        <div class="flex gap-2 mt-2">
          <Button colour="" size="xl">Accept</Button>
          <Button colour="sky" size="xl">Decline</Button>
        </div>
      </template>

      <div class="flex flex-col md:flex-row gap-4 pt-4 items-center">
        <Button colour="indigo" size="xs" loading>xs Button</Button>
        <Button colour="indigo" size="sm" loading>sm Button</Button>
        <Button colour="indigo" size="md" loading>md Button</Button>
        <Button colour="indigo" size="lg" loading>lg Button</Button>
        <Button colour="indigo" size="xl" loading>xl Button</Button>
      </div>

      <div class="flex flex-col md:flex-row gap-4 pt-4 items-center">
        <Button colour="indigo" size="xs">xs Button</Button>
        <Button colour="indigo" size="sm">sm Button</Button>
        <Button colour="indigo" size="md">md Button</Button>
        <Button colour="indigo" size="lg">lg Button</Button>
        <Button colour="indigo" size="xl">xl Button</Button>
      </div>

      <div class="flex flex-col md:flex-row gap-4 pt-4 items-center">
        <Button colour="soft-indigo" size="xs">xs Button</Button>
        <Button colour="soft-indigo" size="sm">sm Button</Button>
        <Button colour="soft-indigo" size="md">md Button</Button>
        <Button colour="soft-indigo" size="lg">lg Button</Button>
        <Button colour="soft-indigo" size="xl">xl Button</Button>
      </div>

      <div class="flex flex-col md:flex-row gap-4 pt-4 items-center">
        <Button colour="white" size="xs">xs Button</Button>
        <Button colour="white" size="sm">sm Button</Button>
        <Button colour="white" size="md">md Button</Button>
        <Button colour="white" size="lg">lg Button</Button>
        <Button colour="white" size="xl">xl Button</Button>
      </div>

    </Layout>
</template>