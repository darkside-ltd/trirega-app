<template>
  <div class="flex gap-2 mt-2 items-center">

    <template v-if="status === 'Planned'">
      <Button colour="soft-indigo" size="md" :loading="isButtonDisabled" @click="updateTask({action:'activate'})">Activate</Button>
    </template>

    <template v-if="status === 'Active'">
      <Button colour="soft-indigo" size="md" :loading="isButtonDisabled" @click="updateTask({action:'complete'})">Complete</Button>
    </template>

    <template v-if="status === 'Completed' || status === 'Cancelled'">
      <Button colour="soft-indigo" size="md" :loading="isButtonDisabled" @click="updateTask({action:'close'})">Close</Button>
      <Button colour="soft-indigo" size="md" :loading="isButtonDisabled" @click="updateTask({action:'reopen'})">Reopen</Button>
    </template>

    <template v-if="type === 'Reactive' && status === 'Closed'">
      <Button colour="soft-indigo" size="md" :loading="isButtonDisabled" @click="updateTask({action:'activate'})">Reactivate</Button>
    </template>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
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
  components: {
    Button,
  },
  setup(props, { emit }) {
    const isButtonDisabled = ref(false);
    const router = useRouter();
    
    const disableButton = () => {
      console.log('disable button');
      isButtonDisabled.value = true;
    };
    
    const enableButton = () => {
      console.log('enable button');
      isButtonDisabled.value = false;
    };
    
    const updateTask = (body) => {
      disableButton();

      if(!props.taskId || !body) return

      console.log(props.taskId)

      // Perform the API request
      try {
      fetchWrapper
        .put(`${baseUrl}/api/workTask/${props.taskId}`, body)
        .then((response) => {
          console.log({ response }, 'API response received');
          enableButton();
          // Emit the "completed" event to the parent component with the response data
          emit('task-updated', response.data);
          router.go(); // Refresh the page
        })
        .catch((error) => {
          console.error('Error:', error);
          enableButton();
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    return {
      isButtonDisabled,
      disableButton,
      enableButton,
      updateTask,
    };
  },
};
</script>

