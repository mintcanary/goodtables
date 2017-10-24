<template>
  <div class="source-item">
    <div v-if="status === 'valid'" class="panel panel-success" v-bind:class="[source, job]">
      <SourceItemContent :title="title" :integration="integration" :jobnumber="jobnumber" :jobtotal="jobtotal" status="valid" :time="time" :source="source" :job="job"/>
    </div>
    <div v-else-if="status === 'invalid'" class="panel panel-danger" v-bind:class="[source, job]">
      <SourceItemContent :title="title" :integration="integration" :jobnumber="jobnumber" :jobtotal="jobtotal" status="invalid" :time="time" :source="source" :job="job"/>
    </div>
    <div v-else class="panel panel-warning" v-bind:class="[source, job]">
      <SourceItemContent :title="title" :integration="integration" :jobnumber="jobnumber" :jobtotal="jobtotal" status="..." :time="time" :source="source" :job="job"/>
    </div>
  </div>
</template>

<script>
  import SourceItemContent from '~components/source_list_item_contents.vue'

  export default {
    props: ['title', 'integration', 'jobnumber', 'jobtotal', 'status', 'time', 'source', 'job'],
    components: {
      SourceItemContent
    }
  }
</script>
