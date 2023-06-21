<script>
import { ref, onMounted, computed } from 'vue';
import { useTasksStore } from '@/stores';
import Layout from '@/layouts/Layout.vue';
import ListCard from '@/components/ListCard.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  title: 'Dashboard',
  components: {
    Layout,
    ListCard,
    TaskList,
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
  },
  setup() {
    const taskStore = useTasksStore();
    const tasks = ref([]);

    onMounted(fetchData);

    async function fetchData() {
      await taskStore.getAll();
    }

    return {
      taskStore,
      tasks,
    };
  },
};
</script>

<template>
  <Layout h1="Dashboard" split>
    <template #content>
      <div class="pb-6 flex flex-col gap-4">
        <ListCard title="Emergency" :count="taskStore?.emergencies?.length" type="emergency">
          <TaskList :items="taskStore.emergencies"></TaskList>
        </ListCard>
        <ListCard title="Overdue" :count="taskStore?.overdue?.length" accordion type="overdue">
          <TaskList :items="taskStore.overdue"></TaskList>
        </ListCard>
        <ListCard title="Due this week" :count="taskStore?.dueThisWeek?.length" accordion>
          <TaskList :items="taskStore.dueThisWeek"></TaskList>
        </ListCard>
      </div>
    </template>

    <template #aside>
      <ListCard title="Links">
        <p>Shortcuts and counts of common task status/types ()</p>
        <template v-for="link in navigation" :key="link.href">
          <router-link :to="link.href">{{ link.name }}</router-link>
        </template>
      </ListCard>
    </template>
  </Layout>
</template>

<!-- // not yet possible -->
<!-- <p>Your Tasks (Recently modified tasks)</p> -->
<!-- <p>Overdue (plannedStart is in past relative to exact moment in time. plannedEnd is in past)</p>
<p>Due this week (plannedStart or plannedEnd this week - next 7 days)</p>
<p>Emergency (taskPriority 'Emergency')</p> -->
