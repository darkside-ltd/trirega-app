<template>
  <p :class="[statuses[status], 'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset']">{{ status }}</p>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      statuses: {
        'Complete': 'text-green-700 bg-green-50 ring-green-600/20',
        'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
        'Active': 'text-green-700 bg-green-50 ring-green-600/20',
        'Archived': 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
      },
    };
  },
};
</script>
