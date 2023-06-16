<script>
import { ref, onMounted } from 'vue';
import { fetchWrapper, formatDate, formatDistanceValue } from '@/helpers';
import { useRoute } from 'vue-router';
import Layout from '@/layouts/Layout.vue'
const baseUrl = import.meta.env.VITE_AUTH_API_URL;
import Dot from '@/components/Dot.vue'
import Badge from '@/components/Badge.vue'
import BadgePriority from '@/components/BadgePriority.vue'
import ActivityFeed from '@/components/ActivityFeed.vue'
import Button from '@/components/Button.vue'
import TaskActions from '@/components/TaskActions.vue'
import DataPoint from '@/components/DataPoint.vue'
import Divider from '@/components/Divider.vue'

export default {
  title: `Task`,
  setup() {
    const route = useRoute();
    const task = ref([]);

    // title="shit"

    onMounted(fetchData);

    async function fetchData() {
      try {
        // Access the taskId from the route parameters
        const taskId = route.params.taskId;

        // Append taskId to the API endpoint
        const url = `${baseUrl}/api/workTask/${taskId}`
        const result = await fetchWrapper.get(url)
        task.value = result.data[0]
        console.log({task})

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    return {
      task,
    }
  },
  components: {
    Layout,
    Badge,
    BadgePriority,
    Button,
    DataPoint,
    Dot,
    Divider,
    ActivityFeed,
    TaskActions
  },
  methods: {
    formattedDate(date) {
      return formatDate(date);
    },
    formatDistance(a,b,c) {
      return formatDistanceValue(a,b,c);
    }
  },
}
</script>

<template>
    <Layout :h1="task.id" :split="true">

      <template #topleft>
        <div class="flex gap-2 mt-2">
          <badge v-if="task.status && task.status === 'Active'" colour="sky"><dot :status="task.status">{{ task.status }}</dot> {{ task.status }}</badge>
          <badge v-else>{{ task.status }}</badge>
          <badge v-if="task.taskType && task.taskType !== task.status">{{ task.taskType }}</badge>
          <badge-priority :priority="task.requestClassPriority"></badge-priority>
        </div>
      </template>

      <template #topright>
          <TaskActions :status="task.status" :type="task.taskType" :taskId="task.recordId"></TaskActions>
      </template>

      <template #content>
        <div class="flex items-center gap-x-2">
            <p class="font-medium text-xl">{{ task.taskName }}</p>
          </div>
          <div class="flex mt-4 items-center gap-x-2">
            <p class="text-l">
              <template v-if="task.description">{{ task.description }}</template>
              <template v-else>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</template>
            </p>
          </div>
            <DataPoint title="Re-Issue Reason" value="Not in JSON"/>
            <DataPoint title="CPPM document Status" value="Not in JSON"/>

            <Divider>Details</Divider>
            <!-- <p class="font-medium text-xl mt-8">Details</p> -->
            <DataPoint title="Request Class" :value="task.requestClass"/>
            <DataPoint title="Service Class" value="Not in JSON"/>
            <DataPoint title="Primary Work Location" :value="task.workLocation"/>
            <DataPoint title="Certificate Required?" :value="task.certificateRequired"/>
            <DataPoint title="Incident Severity" :value="task.incidentSeverity"/>

            <Divider>Request</Divider>
            <DataPoint title="ID" value="Not in JSON"/>
            <DataPoint title="Full Name" value="Not in JSON"/>
            <DataPoint title="Created" isDate :value="task.createdDateTime"/>
            <DataPoint title="Request Type" :value="task.taskType"/>
            <DataPoint title="Request Class" :value="task.requestClass"/>
            <!-- <DataPoint title="" :value="task."/> -->

            <Divider>Planned</Divider>
            <DataPoint title="Assigned" value="Not in JSON"/>
            <DataPoint title="Respond Within" :value="task.respondTime"/>
            <DataPoint title="Start" isDate :value="task.plannedStart"/>
            <DataPoint title="End" isDate :value="task.plannedEnd"/>
            <DataPoint title="Duration" :value="formatDistance(task.plannedEnd, task.plannedStart, {})"/>
            <DataPoint title="Follow Up" value="Not in JSON"/>
            <DataPoint title="Follow Up Within" value="Not in JSON"/>
            <DataPoint title="Working Days" value="Not in JSON"/>
            <DataPoint title="Working Hours" value="Not in JSON"/>
            <DataPoint title="Cost" :value="task.baselineTotalCost"/>

            <Divider>Actual</Divider>
            <DataPoint title="Start" isDate :value="task.actualStart"/>
            <DataPoint title="End" isDate :value="task.actualEnd"/>
            <DataPoint title="Duration" :value="formatDistance(task.actualEnd, task.actualStart, {})"/>
            <DataPoint title="Accepted Datetime" value="Not in JSON"/>
            <DataPoint title="On Site Datetime" value="Not in JSON"/>
            <DataPoint title="Completed On Site" value="Not in JSON"/>

        <!-- <div class="mt-4 flex items-center gap-x-2 leading-5">
          {{ task }}
        </div> -->
      </template>

      <template #aside>
          <div class="text-xl font-semibold"><h2>Activity</h2></div>
          <div class="mt-4"><ActivityFeed></ActivityFeed></div>
      </template>

    </Layout>
</template>