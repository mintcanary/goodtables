<template>
  <div v-if="status === 'valid'" class="source-item panel panel-success" v-bind:class="[source, job]">
    <SourceItemContent :title="title" :integration="integration" :jobnumber="jobnumber" status="valid" :time="time" :source="source" :job="job"/>
  </div>
  <div v-else-if="status === 'invalid'" class="source-item panel panel-danger" v-bind:class="[source, job]">
    <SourceItemContent :title="title" :integration="integration" :jobnumber="jobnumber" status="invalid" :time="time" :source="source" :job="job"/>
  </div>
  <div v-else class="source-item panel panel-warning" v-bind:class="[source, job]">
    <SourceItemContent :title="title" :integration="integration" :jobnumber="jobnumber" status="..." :time="time" :source="source" :job="job"/>
  </div>
</template>

<script>
  import SourceItemContent from '~components/source_list_item_contents.vue'

  export default {
    props: ['title', 'integration', 'jobnumber', 'status', 'time', 'source', 'job'],
    components: {
      SourceItemContent
    }
  }
</script>
