<template>
  <div class="dashboard">
    <section class="actions">
      <div class="nothing">
        <div>
          <h1>Action required</h1>
        </div>

        <div class="message">
          <p>
            <span class="icon-checkmark"><i>Valid</i></span>
            <span class="text">Nothing to do here</span>
          </p>
        </div>
      </div>
    </section>

    <section class="jobs">
      <h1>Latest jobs</h1>
      <source-item title="okfn/my-data" integration="github" jobnumber="77" jobtotal="77" status="valid" time="7 minutes ago"/>
      <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobtotal="2"  status="valid" time="20 minutes ago"/>
      <source-item title="okfn/test-data" integration="github" jobnumber="8" jobtotal="8"  status="invalid" time="1 day ago"/>
      <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobtotal="1"  status="invalid" time="2 days ago"/>
    </section>
  </div>
</template>

<script>
  import SourceItem from '~components/source_list_item.vue'

  export default {
    layout: 'app',
    components: {
      SourceItem
    },
    head () {
      return {
        title: `goodtables`
      }
    }
  }
</script>
