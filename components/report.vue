<template>
  <div class="goodtables-ui-report">

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

      <report-error title="Defective Row" helptitle="<span class='label label-info'>Structure</span> Defective Row" count="72" description="The row dimensions are incorrect compared to headers. <a>Read more</a>">
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

  </div>
</template>

<script>
  import ReportError from '~components/report_error.vue'

  export default {
    layout: 'app',
    components: {
      ReportError
    }
  }
</script>
