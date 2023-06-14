<script>
import { ref, onMounted } from 'vue';
import { useTasksStore } from '@/stores'
import TaskList from '@/components/TaskList.vue'

export default {
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
  },
  data() {
    return {
      taskId: null
    };
  },
  mounted() {
    this.taskId = this.$route.params.taskId;
  }
}
</script>

<template>
  <div>
    <h1>Task ID: {{ taskId }}</h1>
  </div>
</template>