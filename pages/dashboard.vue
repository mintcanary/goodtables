<template>
  <div class="invalid">
    <div class="inner banner">
      <a class="icon-github integration"><i>GitHub</i></a>
      <h2 class="source-title">
        Test Data
        <small>github/okfn/test-data</small>
      </h2>
      <source-item title="okfn/test-data" integration="github" jobnumber="8" jobtotal="8"  status="invalid" time="1 day ago" source="active" job="active"/>
    </div>
    <section class="inner">

      <div>
        <ul class="nav nav-tabs" role="tablist">
         <li role="presentation" class="active"><a href="#report" aria-controls="home" role="tab" data-toggle="tab">Report</a></li>
         <li role="presentation"><a href="#history" aria-controls="profile" role="tab" data-toggle="tab">Job history</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="report tab-pane active" id="report">

            <report-error title="Missing Header" helptitle="<span class='label label-info'>Structure</span> Missing Header" count="1" description="Header column is empty. <a>Read more</a>">
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
            </report-error>

            <h4 class="file-heading">
              <span>
                <a class="file-name">github/okfn/test-data/master/some-file.csv</a>
                <a class="file-count">File 1 of 2</a>
              </span>
            </h4>

            <report-error title="Missing Header" helptitle="<span class='label label-info'>Structure</span> Missing Header" count="1" description="Header column is empty. <a>Read more</a>">
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
            </report-error>

            <report-error title="Duplicate Header" helptitle="<span class='label label-info'>Structure</span> Duplicate Header" count="1" description="The headers highlighted below are duplicates. <a>Read more</a>">
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
            </report-error>

            <report-error title="Defective Row" helptitle="<span class='label label-info'>Structure</span> Defective Row" count="3" description="The row dimensions are incorrect compared to headers. <a>Read more</a>">
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
            </report-error>

            <report-error title="Duplicate Row" helptitle="<span class='label label-info'>Structure</span> Duplicate Row" count="1" description="The exact same row has been seen before (a duplicate). <a>Read more</a>">
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
            </report-error>


            <h4 class="file-heading">
              <span>
                <a class="file-name">github/okfn/test-data/master/another-file.csv</a>
                <a class="file-count">File 2 of 2</a>
              </span>
            </h4>

            <report-error title="Missing Header" helptitle="<span class='label label-info'>Structure</span> Missing Header" count="1" description="Header column is empty. <a>Read more</a>">
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
            </report-error>

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
  import ReportError from '~components/report_error.vue'
  import $ from 'jquery'

  export default {
    layout: 'dashboard',
    components: {
      SourceItem,
      ReportError
    },
    head () {
      return {
        title: `GoodTables`
      }
    },
    mounted: () => {
      function stickyHeading () {
        // TODO: Needs offset for subsequent headings, once a sticky heading is active
        $('.file-heading').each(function () {
          var windowTop = $(window).scrollTop()
          var divTop = $(this).offset().top
          if (windowTop > divTop) {
            $('.file-heading span').removeClass('stick')
            $('.file-heading span').width('100%')
            $(this).children('span').addClass('stick')
            $(this).children('span').width($(this).parents('.report').outerWidth())
          } else {
            $(this).children('span').removeClass('stick')
            $(this).children('span').width('100%')
          }
        })
      }
      $(function () {
        $('.source-view > div').scroll(stickyHeading)
        stickyHeading()
      })
    }
  }
</script>
