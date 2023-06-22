<script>
import { ref, onMounted, computed } from 'vue';
import { useTasksStore } from '@/stores';
import Layout from '@/layouts/Layout.vue';
import ListCard from '@/components/ListCard.vue';
import TaskList from '@/components/TaskList.vue';
import QuickLinkList from '@/components/QuickLinkList.vue';
import QuickLink from '@/components/QuickLink.vue'

export default {
  title: 'Dashboard',
  components: {
    Layout,
    ListCard,
    TaskList,
    QuickLink,
    QuickLinkList,
  },
  setup() {
    const taskStore = useTasksStore();
    const tasks = ref([]);

    onMounted(fetchData);

    async function fetchData() {
      await taskStore.getAll();
    }

    const statusLinks = [
      { name: 'Planned', href: '/list/planned', count: computed(() => taskStore.dueThisWeek.length) },
      { name: 'Active', href: '/list/active' },
      { name: 'Completed', href: '/list/completed' },
      { name: 'Closed', href: '/list/closed' },
      { name: 'Retired', href: '/list/retired' },
    ];

    const priorityLinks = [
      { name: 'Emergency', href: '/list/emergency' },
      { name: 'High Priority', href: '/list/high-priority' },
      { name: 'Medium Priority', href: '/list/med-priority' },
      { name: 'Low Priority', href: '/list/low-priority' },
    ];

    return {
      taskStore,
      tasks,
      statusLinks,
      priorityLinks,
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
      <h3 class="text-base font-semibold leading-6 text-gray-900 mb-4">Task by Status</h3>
      <QuickLinkList>
          <QuickLink :link="statusLinks[0]" :count="taskStore?.getTasksByStatus('Planned')?.length"/>
          <QuickLink :link="statusLinks[1]" :count="taskStore?.getTasksByStatus('Active')?.length" />
          <QuickLink :link="statusLinks[2]" :count="taskStore?.getTasksByStatus('Completed')?.length" />
          <QuickLink :link="statusLinks[3]" :count="taskStore?.getTasksByStatus('Closed')?.length" />
          <QuickLink :link="statusLinks[4]"  :count="taskStore?.getTasksByStatus('Retired')?.length"/>
      </QuickLinkList>

      <h3 class="text-base font-semibold leading-6 text-gray-900 mb-4 mt-6">Task by Priority</h3>
      <QuickLinkList>
          <QuickLink :link="priorityLinks[0]" :count="taskStore?.emergencies?.length"/>
          <QuickLink :link="priorityLinks[1]" :count="taskStore?.highPriority?.length"/>
          <QuickLink :link="priorityLinks[2]" :count="taskStore?.medPriority?.length"/>
          <QuickLink :link="priorityLinks[3]" :count="taskStore?.lowPriority?.length"/>
      </QuickLinkList>

    </template>
  </Layout>
</template>
