<script>
import { useRoute } from 'vue-router';
import Layout from '@/layouts/Layout.vue';
import TaskList from '@/components/TaskList.vue';
import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_AUTH_API_URL}/api/workTask/search`;

export default {
  data() {
    return {
      tasks: [],
      pageHeader: 'Dynamic List View',
    };
  },
  components: {
    Layout,
    TaskList,
  },
  mounted() {
    this.fetchSearchResults();
  },
  watch: {
    '$route.params.listType': {
      immediate: true,
      handler(newListType, oldListType) {
        if (newListType !== oldListType) {
          this.fetchSearchResults();
        }
      },
    },
  },
  methods: {
    async fetchSearchResults() {
      let title
      let body = {
        page: 0,
        pageSize: 100,
      };

      let type = this.$route.params.listType;
      console.log(this.$route.params.listType);

      console.log({ type });
      if (!type) return;

      type = type.toLowerCase();

      if (type === 'active') {
        body.status = 'Active'
        title = "Active Tasks"
      }
      if (type === 'completed') {
        body.status = 'Completed'
        title = "Completed Tasks"
      }

      if (type === 'high-priority') {
        body.requestClassPriority = 'High'
        title = "High Priority"
      }
      if (type === 'med-priority') {
        body.requestClassPriority = 'Medium'
        title = "Medium Priority"
      }
      if (type === 'low-priority') {
        body.requestClassPriority = 'Low'
        title = "Low Priority"
      }

      document.title = title
      this.pageHeader = title

      try {
        const response = await fetchWrapper.post(baseUrl, body);
        this.tasks = response;
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    },
  },
};
</script>

<template>
  <Layout :h1="pageHeader">
    <TaskList :items="tasks.data"></TaskList>
  </Layout>
</template>
