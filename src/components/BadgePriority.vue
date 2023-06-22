<template>
  <Badge v-if="priority" :colour="getColourByPriority" :dark="dark">{{ getTextByPriority }}</Badge>
</template>

<script>
import Badge from '@/components/Badge.vue';

export default {
  props: {
    priority: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Badge,
  },
  computed: {
    getColourByPriority() {
      // Define your mapping of priority to colour
      const colourMap = {
        High: this.dark ? 'dark-red' : 'red',
        Medium: this.dark ? 'dark-yellow' : 'yellow',
        Low: this.dark ? 'dark-green' : 'green',
      };
      // Return the corresponding colour based on the priority prop
      const priorityColour = colourMap[this.priority];
      return priorityColour || (this.dark ? 'dark-gray' : 'gray'); // Fallback to gray or dark-gray if priority not matched
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
