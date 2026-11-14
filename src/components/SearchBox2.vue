<script>
import { searchQuery } from '@/helpers';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { AisInstantSearch, AisSearchBox } from 'vue-instantsearch/vue3/es';
import algoliasearch from 'algoliasearch/lite';
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

// const searchClient = algoliasearch('BJZNQE30Q5', '332350331a7c22a706e895bff52153dd');

export default {
    data() {
        return {
            searchClient,
        };
    },
    methods: {
        handleSearch(e) {
            return searchQuery(e);
        },
    },
    components: {
        MagnifyingGlassIcon,
        AisInstantSearch,
        AisSearchBox,
    },
};
</script>

        


<template>
    <div>
        <AisInstantSearch :search-client="searchClient" index-name="worktask">
            <AisSearchBox />
        </AisInstantSearch>
        <!-- <label for="search" class="sr-only">Search</label>
        <div class="relative text-gray-400 focus-within:text-gray-600">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
        </div>
        <input id="search" @keyup.enter="handleSearch" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
          </div> -->
    </div>
</template>

<style scoped>
.ais-Hits {
    position: absolute;
    background: white;
}
</style>