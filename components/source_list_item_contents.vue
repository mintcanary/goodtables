<template>
  <div :class="integration">
    <router-link to="/jobs/report" class="source" v-bind:class="{ active: source }">
      <span class="status">{{ status }} </span>
      <span v-if="status === 'valid'" class="label label-success">
        <span class="icon-checkmark"><i>Valid</i></span>
      </span>
      <span v-else-if="status === 'invalid'" class="label label-danger">
        <span class="icon-cross"><i>Invalid</i></span>
      </span>
      <h3 class="panel-title">{{ integration }}/{{ title }}<span class="jobnumber">#{{ jobnumber }}</span></h3>
    </router-link>
    <router-link to="/jobs/report" class="job" v-bind:class="{ active: job }">
      <span class="jobcount"><span class="jobnumber"> #{{ jobnumber }}</span><span class="jobtotal"> of {{ jobtotal }}</span></span><span class="icon-clock"></span><span class="time"> {{ time }}</span>
    </router-link>
    <router-link to="/jobs/report" v-if="integration === 'github'" class="integration icon-github"></router-link>
    <router-link to="/jobs/report" v-else-if="integration === 'aws'" class="integration icon-amazon"></router-link>
  </div>
</template>

<script>
  export default {
    props: ['title', 'integration', 'jobnumber', 'jobtotal', 'status', 'time', 'source', 'job']
  }
</script>
