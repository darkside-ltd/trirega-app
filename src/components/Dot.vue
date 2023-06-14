<template>
  <div class="flex gap-1 content-center items-center">
    <span v-if="status === 'Active'" class="relative flex h-2 w-2">
      <span :class="[statuses[status], 'motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75']"></span>
      <span :class="[statuses2[status], 'relative inline-flex rounded-full h-2 w-2 bg-sky-500']"></span>
    </span>
    <p v-if="showText" :class="[statustext[status], 'text-xs']"><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
    showText: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      statuses: {
        'Active': 'text-green-700 bg-green-50 ring-green-600/20',
        'Planned': 'invisible text-yellow-800 bg-yellow-50 ring-yellow-600/20',
        'Completed': 'invisible text-gray-600 bg-gray-50 ring-gray-500/10',
        'Closed': 'invisible text-gray-600 bg-gray-50 ring-gray-500/10',
      },
      statuses2: {
        'Active': 'bg-emerald-500',
        'Planned': 'bg-yellow-500',
        'Completed': 'bg-gray-200',
        'Closed': 'bg-gray-200',
      },
      statustext: {
        'Active': 'text-emerald-500',
        'Planned': 'text-yellow-500',
        'Completed': 'text-gray-500',
        'Closed': 'text-gray-500',
      },
    };
  },
};
</script>
