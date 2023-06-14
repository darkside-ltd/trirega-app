<template>
  <div class="flex gap-1 content-center items-center">
    <div :class="[statuses[status], 'flex-none rounded-full bg-emerald-500/20 p-1']">
      <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
    </div>
    <p class="text-xs"><slot></slot></p>
  </div>
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
