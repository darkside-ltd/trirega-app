<script>
import { ref, onMounted } from 'vue';
import { useTasksStore } from '@/stores'
import TaskList from '@/components/TaskList.vue'
import Layout from '@/layouts/Layout.vue'

export default {
  title: 'All Tasks',
  setup() {
    const taskStore = useTasksStore();
    const tasks = ref([]);

    onMounted(fetchData);

    async function fetchData() {
      try {
        tasks.value = await taskStore.getAll();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    return {
      taskStore,
      tasks,
    }
  },
  components: {
    TaskList,
    Layout,
  },
  data() {
    return {
      items: []
    };
  },
}
</script>

<template>
  <div>
    <!-- <task-list :items="items"></task-list> -->
    <Layout h1="All Tasks">
      <task-list :items="taskStore.tasks.data"></task-list>
    </Layout>
    <!-- <ul class="divide-y divide-gray-200">
      <li v-for="task in taskStore.tasks.data" :key="task.email" class="py-4 flex">
        <img class="h-10 w-10 rounded-full" :src="task.image" alt="" />
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ task.id }}</p>
          <p class="text-sm text-gray-500">{{ task.email }}</p>
        </div>
      </li>
    </ul> -->
  </div>
</template>