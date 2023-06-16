<template>
  <div class="flex gap-2 mt-2 items-center">

    <template v-if="status === 'Planned'">
      <Button colour="soft-indigo" size="md" :disabled="isButtonDisabled" @click="updateTask({action:'activate'})">Activate</Button>
    </template>

    <template v-if="status === 'Active'">
      <Button colour="soft-indigo" size="md" :disabled="isButtonDisabled" @click="updateTask({action:'complete'})">Complete</Button>
    </template>

    <template v-if="status === 'Completed'">
      <Button colour="soft-indigo" size="md" :disabled="isButtonDisabled" @click="updateTask({action:'close'})">Close</Button>
    </template>

    <template v-if="type === 'Planned' && status === 'Closed'">
      <!-- <Button colour="soft-indigo" size="md" :disabled="isButtonDisabled" @click="updateTask({action:'planned'})">Add to plan</Button> -->
    </template>

    <template v-if="type === 'Reactive' && status === 'Closed'">
      <!-- <Button colour="soft-indigo" size="md" :disabled="isButtonDisabled" @click="updateTask({action:'activate'})">Reactivate</Button> -->
    </template>

  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { fetchWrapper } from '@/helpers';
const baseUrl = import.meta.env.VITE_AUTH_API_URL;

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
    taskId: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isButtonDisabled = false;
    
    return {
      isButtonDisabled,
    };
  },
  components: {
    Button,
  },
  methods: {
    disableButton() {
      console.log('disable button')
      this.isButtonDisabled = true;
    },
    enableButton() {
      console.log('enable button')
      this.isButtonDisabled = false;
    },
    updateTask(body) {
      this.disableButton()

      fetchWrapper
        .put(`${baseUrl}/api/workTask/${this.taskId}`, body)
        .then((response) => {
          console.log({response}, 'API response received')
          this.enableButton()
          // Emit the "completed" event to the parent component with the response data
          this.$emit('task updated', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
          this.enableButton()
        });
    },
  }
};
</script>
