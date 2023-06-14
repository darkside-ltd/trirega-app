<template>
  <Badge :colour="getColourByPriority">{{ getTextByPriority }}</Badge>
</template>

<script>
import Badge from '@/components/Badge.vue';

export default {
  props: {
    priority: {
      type: String,
      required: true,
    },
  },
  components: {
    Badge,
  },
  computed: {
    getColourByPriority() {
      // Define your mapping of priority to colour
      const colourMap = {
        High: 'red',
        Medium: 'yellow',
        Low: 'green',
      };
      // Return the corresponding colour based on the priority prop
      return colourMap[this.priority] || 'grey'; // Default to 'grey' if priority not matched
    },
    getTextByPriority() {
      // Define your mapping of priority to text
      const textMap = {
        High: 'High Priority',
        Medium: 'Medium Priority',
        Low: 'Low Priority',
      };
      // Return the corresponding text based on the priority prop
      return textMap[this.priority] || 'Unknown Priority'; // Default to 'Unknown Priority' if priority not matched
    },
  },
};
</script>
