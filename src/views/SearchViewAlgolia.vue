<script>
import Layout from '@/layouts/Layout.vue'
import TaskList from '@/components/TaskList.vue'
import { AisInstantSearch, AisSearchBox } from 'vue-instantsearch/vue3/es';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('BJZNQE30Q5', '332350331a7c22a706e895bff52153dd');

export default {
  setup() {
      return {
        searchClient,
      };
    },
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
    AisInstantSearch,
    AisSearchBox,
  },
  created() {
    // Perform search API call or fetch search results
    // this.fetchSearchResults();
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
    <ais-instant-search :search-client="searchClient" index-name="prod_PRODUCTS">
       <ais-hits class="bg-white overflow-auto">
          <template #default="{ items }">
            <div class="mt-4">
              <ul>
                <li v-for="item in items" :key="item.objectID" class="mb-2">
                  {{ item.title }}
                </li>
              </ul>
            </div>
          </template>
        </ais-hits>
    </ais-instant-search>
  </Layout>
</template>