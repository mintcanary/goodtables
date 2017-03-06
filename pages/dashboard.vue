<template>
  <div>
    <header class="main-header">
      
    </header>
    <section class="inner">
      <h2 class="source-title">
        Test Data
        <small>github/okfn/test-data</small>
      </h2>
      <source-item title="okfn/test-data" integration="github" jobnumber="8"  status="invalid" time="1 day ago" source="active" job="active"/>
      <div>
        Report here
      </div>
      Added: 21 Feb 2017
    </section>
  </div>
</template>

<script>
  import SourceItem from '~components/source_list_item.vue'

  export default {
    layout: 'dashboard',
    components: {
      SourceItem
    },
    head () {
      return {
        title: `Dashboard`
      }
    }
  }
</script>
