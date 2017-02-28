<template>
  <div :class="integration">
    <a class="source" v-bind:class="{ active: source }">
      <span v-if="status === 'valid'" class="label label-success">
        <span class="icon-checkmark"><i>Valid</i></span>
      </span>
      <span v-else-if="status === 'invalid'" class="label label-danger">
        <span class="icon-cross"><i>Invalid</i></span>
      </span>
      <h3 class="panel-title">{{ integration }}/{{ title }}<span class="jobnumber">#{{ jobnumber }}</span></h3>
    </a>
    <a class="job" v-bind:class="{ active: job }">
      <span class="icon-clock"></span><span class="time"> {{ time }}</span><span class="status"> {{ status }}</span><span class="jobnumber"> #{{ jobnumber }}</span>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['title', 'integration', 'jobnumber', 'status', 'time', 'source', 'job']
  }
</script>
