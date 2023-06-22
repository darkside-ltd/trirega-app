import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_AUTH_API_URL}/api/workTask/`;

export const useTasksStore = defineStore({
    id: 'tasks',
    state: () => ({
      tasks: [],
    }),
    actions: {
      async getAll() {
        this.tasks = { loading: true };
        fetchWrapper
          .get(baseUrl)
          .then((tasks) => {
            console.log({ tasks });
            this.tasks.data = tasks.data;
            this.tasks.loading = false;
            return;
          })
          .catch((error) => (this.users = { error }));
      },
    },
    getters: {
      overdue(state) {
        const now = new Date();
  
        return state?.tasks?.data?.filter((task) => {
          if (task.status === 'Active') {
            const plannedStart = new Date(task.plannedStart);
            const plannedEnd = new Date(task.plannedEnd);
  
            // Check if either plannedStart or plannedEnd is earlier than now
            return plannedStart < now || plannedEnd < now;
          }
        });
      },
      dueThisWeek(state) {
        const now = new Date();
        const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  
        return state?.tasks?.data?.filter((task) => {
          if (task.status === 'Active') {
            const plannedStart = new Date(task.plannedStart);
            const plannedEnd = new Date(task.plannedEnd);
  
            // Check if plannedStart or plannedEnd is within the next 7 days
            return plannedStart >= now && plannedStart <= nextWeek || plannedEnd >= now && plannedEnd <= nextWeek;
          }
        });
      },
      emergencies(state) {
        return state?.tasks?.data?.filter((task) => {
          if (task.status === 'Active') {
            return task.requestClassPriority === 'Emergency';
          }
        });
      },
      highPriority(state) {
        return state?.tasks?.data?.filter((task) => {
          if (task.status === 'Active') {
            return task.requestClassPriority === 'High';
          }
        });
      },
      medPriority(state) {
        return state?.tasks?.data?.filter((task) => {
          if (task.status === 'Active') {
            return task.requestClassPriority === 'Medium';
          }
        });
      },
      lowPriority(state) {
        return state?.tasks?.data?.filter((task) => {
          if (task.status === 'Active') {
            return task.requestClassPriority === 'Low';
          }
        });
      },
      getTasksByStatus(state) {
        return (status) => {
          return state?.tasks?.data?.filter((task) => {
              return task.status === status;
          });
        };
      },
    },
  });
  