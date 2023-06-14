<template>
    <ul role="list" class="divide-y divide-gray-100">
      <li v-for="item in items" :key="item.id" :class="[statusStyle[item.status],'flex items-center justify-between text-gray-500']">

        <router-link class="w-full flex items-center justify-between gap-x-6 py-5" :to="`/task/${item.id}`">
        <div class="min-w-0">
          <div class="flex items-start gap-x-3"> 
            <p class="flex items-center gap-2 text-sm font-semibold leading-6">{{ item.id }}</p>
            <!-- <status-pill :status="item.status">{{ item.status }}</status-pill> -->
              <badge v-if="item.status === 'Active'" colour="sky"><dot :status="item.status">{{ item.status }}</dot> {{ item.status }}</badge>
              <badge v-else>{{ item.status }}</badge>
              <badge-priority :priority="item.requestClassPriority"></badge-priority>
            
          </div>
          <div class="mt-2 flex items-center gap-x-2 text-xs leading-5">
            <p class="truncate font-medium text-sm">{{ item.taskName }}</p>
          </div>
          <div class="mt-1 flex items-center gap-x-2 text-xs leading-5">
            <p class="truncate">{{ item.requestClass }}</p>
          </div>
          <div v-if="item.workLocation" class="mt-1 flex items-center gap-x-2 text-xs leading-5">
            <p class="truncate">{{ item.workLocation }}</p>
          </div>
          <div class="mt-1 flex items-center gap-x-2 text-xs leading-5">
            <p v-if="item.plannedStart" class="whitespace-nowrap">
                <time class="font-medium" :datetime="item.plannedStart">{{ formattedDate(item.plannedStart) }}</time>
              </p>
          </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
          <!-- <dot :status="item.status">{{ item.status }}</dot> -->
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
import Badge from '@/components/Badge.vue'
import BadgePriority from '@/components/BadgePriority.vue'
import { formatDate } from '@/helpers'

export default {
  props: {
    items: {
      type: Array,
      required: false,
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
    Badge,
    BadgePriority,
  },
  methods: {
    formattedDate(date) {
      return formatDate(date);
    }
  },
  data() {
    return {
      statusStyle: {
        'Active': 'text-sky-700 ring-sky-700/10', //bg-sky-50/25 
      },
    };
  },
};
</script>