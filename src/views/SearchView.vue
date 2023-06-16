
<script>
  import Layout from '@/layouts/Layout.vue'
  import TaskList from '@/components/TaskList.vue'

//   export default {
//   title: 'All Tasks',
//   setup() {
//     const taskStore = useTasksStore();
//     const tasks = ref([]);

//     onMounted(fetchData);

//     async function fetchData() {
//       try {
//         tasks.value = await taskStore.getAll();
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     return {
//       taskStore,
//       tasks,
//     }
//   },
//   components: {
//     TaskList,
//     Layout,
//   },
// }

  export default {
    props: {
      searchQuery: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        searchResults: [],
      };
    },
    components: {
        Layout,
        TaskList,
    },
    created() {
      // Perform search API call or fetch search results
      this.fetchSearchResults();
    },
    methods: {
      fetchSearchResults() {
        // Mocking search results data
        this.searchResults = [
          { id: 1, title: 'Search Result 1' },
          { id: 2, title: 'Search Result 2' },
          { id: 3, title: 'Search Result 3' },
        ];
      },
    },
  };
  </script>

<template>
    <Layout h1="Search Results">
        <TaskList :items="searchResults"></TaskList>
    </Layout>
  </template>