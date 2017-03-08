<template>
  <div :class="integration">
    <a class="source" v-bind:class="{ active: source }">
      <span class="status">{{ status }} </span>
      <span v-if="status === 'valid'" class="label label-success">
        <span class="icon-checkmark"><i>Valid</i></span>
      </span>
      <span v-else-if="status === 'invalid'" class="label label-danger">
        <span class="icon-cross"><i>Invalid</i></span>
      </span>
      <h3 class="panel-title">{{ integration }}/{{ title }}<span class="jobnumber">#{{ jobnumber }}</span></h3>
    </a>
    <a class="job" v-bind:class="{ active: job }">
      <span class="jobcount"><span class="jobnumber"> #{{ jobnumber }}</span><span class="jobtotal"> of {{ jobtotal }}</span></span><span class="icon-clock"></span><span class="time"> {{ time }}</span>
    </a>
    <a v-if="integration === 'github'" class="integration icon-github"></a>
    <a v-else-if="integration === 'aws'" class="integration icon-amazon"></a>
  </div>
</template>

<script>
  export default {
    props: ['title', 'integration', 'jobnumber', 'jobtotal', 'status', 'time', 'source', 'job']
  }
</script>
