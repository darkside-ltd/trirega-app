<script>
import Layout from '@/layouts/Layout.vue'
import TaskList from '@/components/TaskList.vue'
import { AisInstantSearch, AisSearchBox, AisDynamicWidgets, AisRefinementList } from 'vue-instantsearch/vue3/es';
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: import.meta.env.VITE_TYPESENSE_API_KEY, // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "littlecloudcomputing.com",
        path: "/ts", // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
        port: "",
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "taskName,description,requestClass,recordId,responsibleOrgName,workLocation",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

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
    AisDynamicWidgets,
    AisRefinementList,
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
    <ais-instant-search :search-client="searchClient" index-name="worktask">
      <AisSearchBox />

      <ais-dynamic-widgets :facets="[]">
        requestClass
        <ais-refinement-list attribute="requestClass" />
        status
        <ais-refinement-list attribute="status" />
        taskType
        <ais-refinement-list attribute="taskType" />
        <!-- <ais-hierarchical-menu :attributes="['hierarchical.lvl0', 'hierarchical.lvl1']" /> -->
        <!-- <ais-panel>
          <ais-menu attribute="requestClass" />
        </ais-panel> -->
      </ais-dynamic-widgets>

      <ais-hits class="bg-white overflow-auto">
        <template #default="{ items }">
          <div class="mt-4">
            <ul>
              <li v-for="item in items" :key="item.objectID" class="mb-2">
                {{ item.taskName }}
              </li>
            </ul>
          </div>
        </template>
      </ais-hits>

    </ais-instant-search>
  </Layout>
</template>