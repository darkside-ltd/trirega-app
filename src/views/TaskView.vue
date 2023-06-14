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

export default {
  setup() {
    const route = useRoute();
    const task = ref([]);

    onMounted(fetchData);

    async function fetchData() {
      try {
        // Access the taskId from the route parameters
        const taskId = route.params.taskId;

        // Append taskId to the API endpoint
        const url = `${baseUrl}/api/workTask/${taskId}`
        const result = await fetchWrapper.get(url)
        task.value = result.data[0]
        console.log({task})

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    return {
      task,
    }
  },
  components: {
    Layout,
    Badge,
    BadgePriority,
    Dot,
    ActivityFeed,
  },
}
</script>

<template>
    <Layout :h1="task.id" :split="true">

      <template #topleft>
        <div class="flex gap-2 mt-2">
          <badge v-if="task.status && task.status === 'Active'" colour="sky"><dot :status="task.status">{{ task.status }}</dot> {{ task.status }}</badge>
          <badge v-else>{{ task.status }}</badge>
          <badge v-if="task.taskType && task.taskType !== task.status">{{ task.taskType }}</badge>
          <badge-priority :priority="task.requestClassPriority"></badge-priority>
        </div>
      </template>

      <template #content>
        <div class="flex items-center gap-x-2">
            <p class="font-medium text-xl">{{ task.taskName }}</p>
          </div>
          <div class="flex mt-4 items-center gap-x-2">
            <p class="text-l">
              <template v-if="task.description">{{ task.description }}</template>
              <template v-else>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</template>
            </p>
          </div>
        <div class="mt-4 flex items-center gap-x-2 leading-5">
          {{ task }}
        </div>
      </template>

      <template #aside>
          <div class="text-xl font-semibold"><h2>Activity</h2></div>
          <div class="mt-4"><ActivityFeed></ActivityFeed></div>
      </template>

    </Layout>
</template>