import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_AUTH_API_URL}/api/workTask/`;

export const useTasksStore = defineStore({
    id: 'tasks',
    state: () => ({
        tasks: []
    }),
    actions: {
        async getAll() {
            this.tasks = { loading: true };
            fetchWrapper.get(baseUrl)
                .then(tasks => {
                    console.log({tasks})
                    this.tasks.data = tasks.data
                    this.tasks.loading = false
                    return
                })
                .catch(error => this.users = { error })
        }
    }
});
