<template>
  <div class="only jobs">
    <h1>Jobs</h1>

    <div class="filter form-group">
      <label class="sr-only" for="keyword">Filter by keyword</label>
      <div class="input-group">
        <input type="text" class="form-control input-lg" id="keyword" placeholder="Filter by keyword">
        <div class="input-group-addon"><button><span class="icon-search"><i>Search</i></span></button></div>
      </div>
    </div>

    <div class="source-list">
      <source-item title="okfn/my-data" integration="github" jobnumber="77" jobtotal="77" status="valid" time="7 minutes ago"/>
      <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobtotal="2"  status="valid" time="20 minutes ago"/>
      <source-item title="okfn/test-data" integration="github" jobnumber="8" jobtotal="8"  status="invalid" time="1 day ago"/>
      <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobtotal="1"  status="invalid" time="2 days ago"/>
    </div>

  </div>
</template>

<script>
  import SourceItem from '~/components/source_list_item.vue'

  export default {
    layout: 'app',
    components: {
      SourceItem
    },
    head () {
      return {
        title: `Goodtables Jobs`
      }
    }
  }
</script>
