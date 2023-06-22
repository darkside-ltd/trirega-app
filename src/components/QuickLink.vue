<template>
    <li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
    <div class="flex gap-x-4 w-full justify-between">
        <div class="flex gap-x-4 w-full ">
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                    <router-link :to="link.href" class="flex gap-3">
                        <span class="absolute inset-x-0 -top-px bottom-0" />
                        {{ link.name }}
                        <Badge v-if="count !== null" :colour="badgeColour">{{ count }}</Badge>
                    </router-link>
                </p>
                <p class="mt-1 flex text-xs leading-5 text-gray-500">
                    {{ link.description }}
                </p>
            </div>
        </div>
        <div class="flex items-center gap-x-4">

            <!-- <div class="hidden sm:flex sm:flex-col sm:items-end">
                <p v-if="link.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time :datetime="link.lastSeenDateTime">{{ link.lastSeen }}</time>
                </p>
                <div v-else class="mt-1 flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p class="text-xs leading-5 text-gray-500">Online</p>
                </div>
            </div> -->

            <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </div>
    </div>
</li>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
import Badge from '@/components/Badge.vue';

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: false,
  },
});
</script>