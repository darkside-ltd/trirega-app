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
      items: [
        {
          id: 1,
          name: 'GraphQL API',
          href: '#',
          status: 'Complete',
          createdBy: 'Leslie Alexander',
          dueDate: 'March 17, 2023',
          dueDateTime: '2023-03-17T00:00Z',
        },
        {
          id: 2,
          name: 'New benefits plan',
          href: '#',
          status: 'In progress',
          createdBy: 'Leslie Alexander',
          dueDate: 'May 5, 2023',
          dueDateTime: '2023-05-05T00:00Z',
        },
        {
          id: 3,
          name: 'Onboarding emails',
          href: '#',
          status: 'In progress',
          createdBy: 'Courtney Henry',
          dueDate: 'May 25, 2023',
          dueDateTime: '2023-05-25T00:00Z',
        },
        {
          id: 4,
          name: 'iOS app',
          href: '#',
          status: 'In progress',
          createdBy: 'Leonard Krasner',
          dueDate: 'June 7, 2023',
          dueDateTime: '2023-06-07T00:00Z',
        },
        {
          id: 5,
          name: 'Marketing site redesign',
          href: '#',
          status: 'Archived',
          createdBy: 'Courtney Henry',
          dueDate: 'June 10, 2023',
          dueDateTime: '2023-06-10T00:00Z',
        },
      ],
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