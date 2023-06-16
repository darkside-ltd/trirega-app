
<template>
    <div>
    <label for="search" class="sr-only">Search</label>
    <div class="relative text-gray-400 focus-within:text-gray-600">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
    </div>
    <input id="search" @keyup.enter="handleSearch" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
  </div>
</div>
</template>

<script>
import { searchQuery } from '@/helpers'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

export default {
    setup() {

    },
    methods: {
        handleSearch(e){
            return searchQuery(e);
        }
    },
    components: {
        MagnifyingGlassIcon,
    }
}
</script>

