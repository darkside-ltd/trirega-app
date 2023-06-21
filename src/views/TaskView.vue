<script>
import { ref, onMounted } from 'vue';
import { fetchWrapper, formatDate, formatMoney, formatDistanceValue, formatDistanceToNowStrictValue, formatDurationHours } from '@/helpers';
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
        const taskValue = result.data
        console.log({taskValue})
        task.value = taskValue

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
    },
    formatDistanceToNowStrict(a,b) {
      return formatDistanceToNowStrictValue(a,b);
    },
    readableHours(h) {
      return formatDurationHours(h);
    },
    readableMoney(a,b,c){
      return formatMoney(a,b,c)
    }
  },
}
</script>

<template>
    <Layout :h1="task.id" split>

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
            <p class="text-l text-slate-500">
              <span class="whitespace-pre" v-if="task.description" v-html="task.description"></span> 
              <!-- // make sure to format as HTML -->
              <!-- <template v-else>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</template> -->
            </p>
          </div>
            <!-- <DataPoint title="Re-Issue Reason" value="Not in JSON"/> -->
            <!-- <DataPoint title="CPPM document Status" value="Not in JSON"/> -->

            <Divider>Details</Divider>
            <!-- <p class="font-medium text-xl mt-8">Details</p> -->
            <DataPoint title="Request Class" :value="task.requestClass?.data?.requestClassPath"/>
            <DataPoint title="Service Class" :value="task.serviceClass"/>
            <DataPoint title="Primary Work Location" :value="task.workLocation"/>
            <!-- <DataPoint title="Certificate Required?" :value="task.certificateRequired"/> -->
            <!-- <DataPoint title="Incident Severity" :value="task.incidentSeverity"/> -->

            <template v-if="task.taskType !== 'Planned'">
              <Divider>Request</Divider>
              <DataPoint title="Requested by" :value="task?.request?.data?.requestedBy"/>
              <DataPoint title="Requested for" :value="task?.request?.data?.requestedFor"/>
              <DataPoint title="Request Type" :value="task?.taskType"/>
              <DataPoint title="Created" isDate :value="task?.request?.data?.createdDateTime"/>
              <DataPoint title="ID" :value="task?.request?.data?.id"/>

              <!-- <DataPoint title="Full Name" value="Not in JSON"/> -->
              <!-- <DataPoint title="Request Class" :value="task.requestClass"/> -->
              <!-- <DataPoint title="" :value="task."/> -->
            </template>

            <Divider>Planned</Divider>
            <DataPoint title="Assigned" isDate :value="task?.assignedDateTime"/>
            <DataPoint title="Respond Within" :value="task.respondWithin"/>
            <DataPoint title="Start" isDate :value="task.plannedStart"/>
            <DataPoint title="End" isDate :value="task.plannedEnd"/>
            <DataPoint title="Duration" :value="formatDistance(task.plannedEnd, task.plannedStart, {})"/>
            <DataPoint title="Follow Up" isDate :value="task.plannedFollowUpDateTime"/>
            <DataPoint title="Follow Up Within" :value="task.plannedFollowUpWithin"/>
            <DataPoint title="Working Days" :value="`${task.plannedWorkingDays} Day(s)`"/>
            <DataPoint title="Working Hours" :value="readableHours(task.plannedWorkingHours)"/>
            <!-- <DataPoint title="Working Hours 1.5" :value="readableHours(1.5)"/>
            <DataPoint title="Working Hours 50" :value="readableHours(50)"/>
            <DataPoint title="Working Hours 0.21343645" :value="readableHours(0.21343645)"/> -->
            <DataPoint title="Baseline Total Cost" :value="readableMoney(task.baselineTotalCost)"/>
            <DataPoint title="Planned Cost" :value="readableMoney(task.plannedCost)"/>
            <!-- <DataPoint title="Baseline Total Cost test" :value="readableMoney('9999.99')"/> -->

            <Divider>Actual</Divider>
            <DataPoint title="Start" isDate :value="task.actualStart"/>
            <DataPoint title="End" isDate :value="task.actualEnd"/>
            <DataPoint title="Duration" :value="formatDistance(task.actualEnd, task.actualStart, {})"/>
            <!-- <DataPoint title="Accepted Datetime" value="Not in JSON"/> -->
            <!-- <DataPoint title="On Site Datetime" value="Not in JSON"/> -->
            <!-- <DataPoint title="Completed On Site" value="Not in JSON"/> -->
            <DataPoint title="Actual Cost" :value="readableMoney(task.actualCost)"/>

        <!-- <div class="mt-4 flex items-center gap-x-2 leading-5">
          {{ task }}
        </div> -->
      </template>

      <template #aside>
          <div class="text-xl font-semibold"><h2>Activity</h2></div>
          <div class="mt-4"><ActivityFeed :activity="task.activities" :taskId="task.recordId"></ActivityFeed></div>
      </template>

    </Layout>
</template>