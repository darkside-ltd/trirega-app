<template>
  <button type="button" :class="['rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', colours[colour], [sizes[size]]]"><slot></slot></button>
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
