<template>
    <ul role="list" class="divide-y divide-gray-100">
      <li v-for="item in items" :key="item.id" class="flex items-center justify-between">

        <router-link class="w-full flex items-center justify-between gap-x-6 py-5" :to="`/task/${item.id}`">
        <div class="min-w-0">
          <div class="flex items-start gap-x-3">
            <p class="text-sm font-semibold leading-6 text-gray-900">{{ item.id }}</p>
            <status-pill :status="item.status"></status-pill>
          </div>
          <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p v-if="item.dueDate" class="whitespace-nowrap">
                Due on <time :datetime="item.dueDateTime">{{ item.dueDate }}</time>
              </p>
              <svg v-if="item.dueDate && item.taskName" viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                <circle cx="1" cy="1" r="1" />
              </svg>
            <p class="truncate">{{ item.taskName }}</p>
          </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
          <dot :status="item.status">{{ item.status }}</dot>
          <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </div>
      </router-link>

      </li>
    </ul>
  </template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { EllipsisVerticalIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
import StatusPill from '@/components/Status.vue';
import Dot from '@/components/Dot.vue'

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    EllipsisVerticalIcon,
    ChevronRightIcon,
    StatusPill,
    Dot,
  },
};
</script>