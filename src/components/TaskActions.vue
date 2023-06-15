<template>
  <div class="flex gap-2 mt-2 items-center">

    <template v-if="status === 'Planned'">
      <Button colour="soft-indigo" size="md">Activate</Button>
    </template>

    <template v-if="status === 'Active'">
      <Button colour="soft-indigo" size="md">Complete</Button>
    </template>

    <template v-if="status === 'Complete'">
      <Button colour="soft-indigo" size="md">Close</Button>
    </template>

    <template v-if="type === 'Planned' && status === 'Closed'">
      <!-- <Button colour="soft-indigo" size="md">Add to plan</Button> -->
    </template>

    <template v-if="type === 'Reactive' && status === 'Closed'">
      <!-- <Button colour="soft-indigo" size="md">Reactivate</Button> -->
    </template>

  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  components: {
    Button,
  },
};
</script>
