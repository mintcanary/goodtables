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

            <div class="result panel panel-default">
              <div class="panel-heading">
                <span class="label label-default">1</span>
                <span class="text-uppercase label label-danger">error</span>
                <span class="label label-info">Structure</span>
                <h4 class="panel-title">Missing Header: <small>Header column is empty.</small></h4>
                <a class="more" target="_blank" href="#" title="More information on Missing Header">Read more</a>
              </div>
              <div class="panel-body">
                <table class="table table-bordered table-condensed">
                  <tbody>
                    <tr class="result-header-row">
                      <td class="result-row-index">1</td>
                      <td>id</td>
                      <td>name</td>
                      <td class="danger"></td>
                      <td>name</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="result panel panel-default">
              <div class="panel-heading">
               <span class="label label-default">1</span>
               <span class="text-uppercase label label-danger">error</span>
               <span class="label label-info">Structure</span>
               <h4 class="panel-title">Duplicate Header: <small>The headers highlighted below are duplicates.</small></h4>
               <a class="more" target="_blank" href="#" title="More information on Duplicate Header">Read more</a>
              </div>
              <div class="panel-body">
               <table class="table table-bordered table-condensed">
                 <tbody>
                   <tr class="result-header-row">
                     <td class="result-row-index">1</td>
                     <td>id</td>
                     <td class="danger">name</td>
                     <td></td>
                     <td class="danger">name</td>
                   </tr>
                 </tbody>
               </table>
              </div>
            </div>

            <div class="result panel panel-default">
              <div class="panel-heading">
                <span class="label label-default">3</span>
                <span class="text-uppercase label label-danger">error</span>
                <span class="label label-info">Structure</span>
                <h4 class="panel-title">Defective Row: <small>The row dimensions are incorrect compared to headers.</small></h4>
                <a class="more" target="_blank" href="#" title="More information on Defective Row">Read more</a>
              </div>
              <div class="panel-body">
                <table class="table table-bordered table-condensed">
                  <tbody>
                    <tr class="result-header-row">
                      <td class="result-row-index">1</td>
                      <td>id</td>
                      <td>name</td>
                      <td></td>
                      <td>name</td>
                    </tr>
                    <tr class="result-row danger">
                      <td class="result-row-index">2</td>
                      <td>1</td>
                      <td>english</td>
                    </tr>
                    <tr class="result-row danger">
                      <td class="result-row-index">3</td>
                      <td>1</td>
                      <td>english</td>
                    </tr>
                    <tr class="result-row danger">
                      <td class="result-row-index">4</td>
                      <td>2</td>
                      <td>german</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="result panel panel-default">
              <div class="panel-heading">
                <span class="label label-default">1</span>
                <span class="text-uppercase label label-danger">error</span>
                <span class="label label-info">Structure</span>
                <h4 class="panel-title">Duplicate Row: <small>The exact same row has been seen before (a duplicate).</small></h4>
                <a class="more" target="_blank" href="#" title="More information on Duplicate Row">Read more</a>
              </div>
              <div class="panel-body">
                <table class="table table-bordered table-condensed">
                  <tbody>
                    <tr class="result-header-row">
                      <td class="result-row-index">1</td>
                      <td>id</td>
                      <td>name</td>
                      <td></td>
                      <td>name</td>
                    </tr>
                    <tr class="result-row danger">
                      <td class="result-row-index">3</td>
                      <td>1</td>
                      <td>english</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

         </div>
         <div role="tabpanel" class="tab-pane" id="history">
           History here
         </div>
        </div>
      </div>
      <ul class="meta">
        <li>
          Report calculated on Mon Mar 13 at 01:29 PM
        </li>
        <li>
          Source added: 21 Feb 2017
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
