<template>
  <div>
    <section class="inner">
      <a class="icon-github integration"><i>GitHub</i></a>
      <h2 class="source-title">
        Test Data
        <small>github/okfn/test-data</small>
      </h2>
      <source-item title="okfn/test-data" integration="github" jobnumber="8" jobtotal="8"  status="invalid" time="1 day ago" source="active" job="active"/>
      <div>
        <ul class="nav nav-tabs" role="tablist">
         <li role="presentation" class="active"><a href="#report" aria-controls="home" role="tab" data-toggle="tab">Report</a></li>
         <li role="presentation"><a href="#history" aria-controls="profile" role="tab" data-toggle="tab">Job history</a></li>
        </ul>
        <div class="tab-content">
         <div role="tabpanel" class="report tab-pane active" id="report">
           Report here
         </div>
         <div role="tabpanel" class="tab-pane" id="history">
           History here
         </div>
        </div>
      </div>
      <ul class="meta">
        <li>
          Added: 21 Feb 2017
        </li>
      </ul>
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
