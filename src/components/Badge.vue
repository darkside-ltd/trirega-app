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
        'red': 'bg-red-50 text-red-700 ring-red-700/10',
        'yellow': 'bg-yellow-50 text-yellow-700 ring-yellow-700/10',
        'green': 'bg-green-50 text-green-700 ring-green-700/10',
        'blue': 'bg-blue-50 text-blue-700 ring-blue-700/10',
        'sky': 'bg-sky-50 text-sky-700 ring-sky-700/10',
        'indigo': 'bg-ndigo-50 text-ndigo-700 ring-ndigo-700/10',
        'purple': 'bg-purple-50 text-purple-700 ring-purple-700/10',
      },
    };
  },
};
</script>
