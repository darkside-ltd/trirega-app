<template>
  <span :class="[colours[colour], 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset gap-1.5']"><slot></slot></span>
</template>

<script>
export default {
  props: {
    colour: {
      type: String,
      required: false,
      default: 'gray',
    },
  },
  data() {
    return {
      colours: {
        'pink': 'bg-pink-50 text-pink-700 ring-pink-700/10',
        'gray': 'bg-gray-50 text-gray-700 ring-gray-700/10',
        'dark-gray': 'bg-gray-400/10 text-gray-400 ring-gray-400/20',
        'red': 'bg-red-50 text-red-700 ring-red-700/10',
        'dark-red': 'bg-red-400/10 text-red-400 ring-red-400/20',
        'yellow': 'bg-yellow-50 text-yellow-700 ring-yellow-700/10',
        'dark-yellow': 'bg-yellow-400/10 text-yellow-500 ring-yellow-400/20',
        'green': 'bg-green-50 text-green-700 ring-green-700/10',
        'dark-green': 'bg-green-400/10 text-green-500 ring-green-400/20',
        'blue': 'bg-blue-50 text-blue-700 ring-blue-700/10',
        'sky': 'bg-sky-50 text-sky-700 ring-sky-700/10',
        'dark-sky': 'bg-sky-400/10 text-sky-500 ring-sky-400/20',
        'indigo': 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
        'purple': 'bg-purple-50 text-purple-700 ring-purple-700/10',
      },
    };
  },
};
</script>
