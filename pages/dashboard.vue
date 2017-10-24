<template>
  <div class="dashboard">
    <section class="actions">
      <h1>Action required</h1>

      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingOne">
            <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
            <h3 class="panel-title">
              okfn/test-data
              <small>1 day ago (#2928dd)</small>
            </h3>
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span class="icon-keyboard_arrow_down"><i>Toggle details</i></span>
            </a>
            <span class="count label label-danger">74</span>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
              <ul class="dash-files">
                <dash-file name="some-file.csv" count="73"/>
                <dash-file name="another-file.csv" count="1"/>
              </ul>
              <a type="button" class="btn btn-default">See full report</a>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingTwo">
            <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
            <h3 class="panel-title">
              okfn/more-data
              <small>2 days ago (#2928dd)</small>
            </h3>
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <span class="icon-keyboard_arrow_down"><i>Toggle details</i></span>
            </a>
            <span class="count label label-danger">14</span>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
              <ul class="dash-files">
                <dash-file name="some-file.csv" count="3"/>
                <dash-file name="another-file.csv" count="4"/>
                <dash-file name="some-file.csv" count="5"/>
                <dash-file name="another-file.csv" count="3"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="jobs">
      <h1>Latest jobs</h1>
      <div class="source-list">
        <source-item title="okfn/my-data" integration="github" jobnumber="77" jobtotal="77" status="valid" time="7 minutes ago"/>
        <source-item title="okfn/some-data" integration="aws" jobnumber="2" jobtotal="2"  status="valid" time="20 minutes ago"/>
        <source-item title="okfn/test-data" integration="github" jobnumber="8" jobtotal="8"  status="invalid" time="1 day ago"/>
        <source-item title="okfn/more-data" integration="aws" jobnumber="1" jobtotal="1"  status="invalid" time="2 days ago"/>
      </div>  
    </section>
  </div>
</template>

<script>
  import SourceItem from '~components/source_list_item.vue'
  import DashFile from '~components/dash_file.vue'

  export default {
    layout: 'app',
    components: {
      SourceItem,
      DashFile
    },
    head () {
      return {
        title: `goodtables`
      }
    }
  }
</script>
