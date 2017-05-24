<template>
  <div>
    <div class="source-view">
      <h1>okfn/test-data</h1>
      <div>
        <section class="report">

          <div class="latest-job">
            <div class="icon">
              <span class="label label-danger"><span class="icon-cross"><i>Invalid</i></span></span>
            </div>
            <div class="status invalid">
              <h2>
                Validation failed
                <small>Pushed by amercader on master branch</small>
              </h2>
            </div>
            <div class="meta">
              <ul>
                <li>
                  8 days ago
                </li>
                <li>
                  #2928dd
                </li>
              </ul>
            </div>

          </div>

          <div class="invalid file">

            <h4 class="file-heading">
              <span>
                <a class="file-name">github/okfn/test-data/master/<strong>some-file.csv</strong></a>
                <a class="file-count">Table 1 of 2</a>
              </span>
            </h4>

            <report-error title="Missing Header" helptitle="<span class='label label-info'>Structure</span> Missing Header" count="1" description="Header column is empty. <a>Read more</a>">
              <table class="table">
                <tbody>
                  <tr class="result-header-row">
                    <td class="result-row-index">1</td>
                    <td>id</td>
                    <td>name</td>
                    <td class="danger"></td>
                    <td>name</td>
                  </tr>
                  <tr>
                    <td class="result-row-index">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </report-error>

            <report-error title="Duplicate Header" helptitle="<span class='label label-info'>Structure</span> Duplicate Header" count="1" description="The headers highlighted below are duplicates. <a>Read more</a>">
              <table class="table">
                <tbody>
                  <tr class="result-header-row">
                    <td class="result-row-index">1</td>
                    <td>id</td>
                    <td class="danger">name</td>
                    <td></td>
                    <td class="danger">name</td>
                  </tr>
                  <tr>
                    <td class="result-row-index">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </report-error>

            <report-error title="Defective Row" helptitle="<span class='label label-info'>Structure</span> Defective Row" count="3" description="The row dimensions are incorrect compared to headers. <a>Read more</a>">
              <table class="table">
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
                  <tr class="result-row">
                    <td class="result-row-index">5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </report-error>

            <report-error title="Duplicate Row" helptitle="<span class='label label-info'>Structure</span> Duplicate Row" count="1" description="The exact same row has been seen before (a duplicate). <a>Read more</a>">
              <table class="table">
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
                  <tr class="result-row">
                    <td class="result-row-index">4</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </report-error>
          </div>

          <div class="invalid file">

            <h4 class="file-heading">
              <span>
                <a class="file-name">github/okfn/test-data/master/another-file.csv</a>
                <a class="file-count">Table 2 of 2</a>
              </span>
            </h4>

            <report-error title="Missing Header" helptitle="<span class='label label-info'>Structure</span> Missing Header" count="1" description="Header column is empty. <a>Read more</a>">
              <table class="table">
                <tbody>
                  <tr class="result-header-row">
                    <td class="result-row-index">1</td>
                    <td>id</td>
                    <td>name</td>
                    <td class="danger"></td>
                    <td>name</td>
                  </tr>
                  <tr>
                    <td class="result-row-index">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </report-error>
          </div>
        </section>
        <section class="history aside">
          <div>
            <h3>Job history</h3>
            <div class="source-item panel panel-success"><div class="github"><a class="source"><span class="status">valid </span><span class="label label-success"><span class="icon-checkmark"><i>Valid</i></span></span><h3 class="panel-title">github/okfn/my-data<span class="jobnumber">#77</span></h3></a><a class="job"><span class="jobcount"><span class="jobnumber"> #77</span><span class="jobtotal"> of 77</span></span><span class="icon-clock"></span><span class="time"> 7 minutes ago</span></a><a class="integration icon-github"></a></div></div>
          </div>
        </section>
      </div>

    </div>

  </div>
</template>

<script>
  import SourceItem from '~components/source_list_item.vue'
  import ReportError from '~components/report_error.vue'
  // import $ from 'jquery'

  export default {
    layout: 'app',
    components: {
      SourceItem,
      ReportError
    },
    head () {
      return {
        title: `goodtables`
      }
    },
    mounted: () => {
      /* TODO debug - doesn't work correctly at some windows heights
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
            $(this).children('span').removeClass('stick').width('100%')
          }
        })
      }
      $(function () {
        $(window).scroll(stickyHeading)
      })
      */
    }
  }
</script>
