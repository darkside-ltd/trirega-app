<template>
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white drop-shadow-md">
      <div
        v-if="accordion"
        class="flex items-center justify-between px-4 py-5 sm:px-6 cursor-pointer"
        @click="isOpen = !isOpen"
      >
        <div class="flex items-center gap-2">
          <h3 class="text-base font-semibold leading-6 text-gray-900">{{ title }}</h3>
          <Badge v-if="count !== null" :colour="badgeColour">{{ count }}</Badge>
        </div>
        <button
          class="text-gray-600 hover:text-gray-800 focus:outline-none transition ease-in-out duration-150"
        >
          <svg
            :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      <div v-else class="px-4 py-5 sm:px-6">
        <div class="flex items-center gap-2">
          <h3 class="text-base font-semibold leading-6 text-gray-900">{{ title }}</h3>
          <Badge v-if="count !== null" :colour="badgeColour">{{ count }}</Badge>
        </div>
      </div>
      <transition name="accordion">
        <div v-if="isOpen || !accordion && count !== 0" class="px-4 py-5 sm:p-6">
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import Badge from '@/components/Badge.vue';
  
  export default {
    props: {
      title: {
        type: String,
        default: 'Title',
      },
      count: {
        type: Number,
        default: null,
      },
      description: {
        type: String,
        default: '',
        required: false,
      },
      accordion: {
        type: Boolean,
        default: false,
      },
      type:{
        type: String,
      }
    },
    components: {
      Badge,
    },
    data() {
      return {
        isOpen: false,
      };
    },
    computed: {
        badgeColour() {
            console.log(this.type)
            const t = this.type
            if(t === 'emergency' && this.count > 0) return 'red'
            if(t === 'emergency' && this.count === 0) return 'green'

            if(t === 'overdue' && this.count > 5) return 'red'
            if(t === 'overdue' && this.count > 0) return 'orange'
            if(t === 'overdue' && this.count === 0) return 'green'
        }
    }
  };
  </script>
  
  <style>
  .accordion-enter-active,
  .accordion-leave-active {
    transition-duration: 0s;
  }
  
  .accordion-enter,
  .accordion-leave-to {
    opacity: 0;
    /* transform: translateY(-10px); */
  }
  </style>
  