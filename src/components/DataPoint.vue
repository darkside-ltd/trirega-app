<script>
import { formatDate } from '@/helpers'

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    isDate: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    formattedDate(date) {
      return formatDate(date);
    }
  },
};
</script>

<template>
  <div class="flex flex-col mt-4 md:flex-row md:items-center md:justify-between">
    <div class="font-medium text-md">{{ title }}</div>
    <div class="text-slate-500">
      <template v-if="isDate"><time :datetime="value">{{ formattedDate(value) }}</time></template>
      <template v-else>{{ value }}</template>
    </div>
  </div>
</template>