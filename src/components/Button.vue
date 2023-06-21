<template>
  <button 
  type="button" 
  :class="['rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', colours[colour], [sizes[size]]]"
  :disabled="loading"
  >
  <template v-if="loading">
      <div class="flex items-center">
      <svg :class="['animate-spin mr-3 h-4 w-4', spinnercolours[colour]]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span class="font-semibold">Loading</span>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script>

export default {
  props: {
    colour: {
      type: String,
      required: false,
      default: 'indigo',
    },
    size: {
      type: String,
      required: false,
      default: 'md',
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      colours: {
        'pink': '',
        'gray': '',
        'red': '',
        'yellow': '',
        'green': '',
        'blue': '',
        'sky': 'text-white bg-sky-600 hover:bg-sky-500 focus-visible:outline-sky-600',
        'indigo': 'text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
        'purple': '',
        'white': 'text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-inset ring-gray-300',
        'soft-indigo': 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500',
      },
      spinnercolours: {
        'pink': 'text-white',
        'gray': 'text-white',
        'red': 'text-white',
        'yellow': 'text-white',
        'green': 'text-white',
        'blue': 'text-white',
        'sky': 'text-white',
        'indigo': 'text-white',
        'purple': 'text-white',
        'white': 'text-gray-900',
        'soft-indigo': 'text-white',
      },
      sizes: {
        'xs': 'px-2 py-1 text-xs',
        'sm': 'px-2 py-1 text-s',
        'md': 'px-2.5 py-1.5 text-s',
        'lg': 'px-3 py-2 text-s',
        'xl': 'px-3.5 py-2.5 text-s',
      },
    };
  },
};
</script>
