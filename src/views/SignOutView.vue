<template>
  <div>
    <h1>Signing Out...</h1>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores';

export default {
  async mounted() {
    const authStore = useAuthStore();
    await authStore.logout(); // Call the logout function to log out the user
    // You can also perform any additional cleanup or redirection logic here
    // For example, you can use Vue Router to navigate to a different route
    // router.push('/login');
  },
};
</script>
