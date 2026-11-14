<template>
    <div>
      <ais-instant-search :search-client="searchClient" index-name="prod_PRODUCTS">
        <ais-search-box 
          v-model="query"
        >
          <template #default="{ currentRefinement, refine }">
            <div class="flex relative text-gray-400 focus-within:text-gray-600">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
              </div>
              <div class="flex items-center bg-white rounded-md">
                <input
                    id="search"
                    class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                    name="search"
                    :value="currentRefinement"
                    @input="handleInputChange($event);refine($event.target.value)"
                />
                <Button colour="soft-indigo" size="sm" class="ml-2 mr-1" @click="handleSearch">
                    Search
                </Button>
                </div>
            </div>
          </template>
        </ais-search-box>
  
        <!-- <ais-hits class="bg-white max-h-96 overflow-auto z-10 absolute">
          <template #default="{ items }">
            <div class="mt-4">
              <ul>
                <li v-for="item in items" :key="item.objectID" class="mb-2">
                  {{ item.title }}
                </li>
              </ul>
            </div>
          </template>
        </ais-hits> -->
        
        <!-- Add other Algolia InstantSearch components as needed -->
        <!-- For example, ais-refinement-list, ais-pagination, etc. -->
      </ais-instant-search>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es';
  import algoliasearch from 'algoliasearch/lite';
  import { searchQuery } from '@/helpers';
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
  import Button from '@/components/Button.vue'
  import { useRouter } from 'vue-router';
  
  const searchClient = algoliasearch('BJZNQE30Q5', '332350331a7c22a706e895bff52153dd');
  
  export default {
    components: {
      AisInstantSearch,
      AisSearchBox,
      AisHits,
      MagnifyingGlassIcon,
      Button
    },
    setup() {
      const query = ref('');
      const router = useRouter();
  
      const handleSearch = () => {
      const urlSafeQuery = encodeURIComponent(query.value);
      return searchQuery(urlSafeQuery, router);
    };

      const handleInputChange = (event) => {
        query.value = event.target.value;
        };
  
      return {
        searchClient,
        query,
        handleSearch,
        handleInputChange,
      };
    },
  };
  </script>
  