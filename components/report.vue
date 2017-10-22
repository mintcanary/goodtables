<template>
  <div class="goodtables-ui-report">

    <div class="invalid file">
      <h4 class="file-heading">
        <div class="inner">
          <a class="file-name">github/okfn/test-data/master/<strong>some-file.csv</strong></a>
          <a class="file-count">Table 1 of 3</a>
          <div class="test-counts">
            <a class="label passed collapsed" data-toggle="collapse" href="#file_1_passed" aria-expanded="false" aria-controls="file_1_passed">2</a>
            <span class="label failed">4</span>
          </div>
        </div>
      </h4>

      <ul class="passed-tests result collapse" id="file_1_passed">
        <li>
          <span class="label label-success">No blank headers</span>
        </li>
        <li>
          <span class="label label-success">No missing values</span>
        </li>
      </ul>

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
        <div class="inner">
          <a class="file-name">github/okfn/test-data/master/<strong>another-file.csv</strong></a>
          <a class="file-count">Table 2 of 3</a>
          <div class="test-counts">
            <a class="label passed collapsed" data-toggle="collapse" href="#file_2_passed" aria-expanded="false" aria-controls="file_2_passed">5</a>
            <span class="label failed">1</span>
          </div>
        </div>
      </h4>

      <ul class="passed-tests result collapse" id="file_2_passed">
        <li>
          <span class="label label-success">No blank headers</span>
        </li>
        <li>
          <span class="label label-success">No duplicate headers</span>
        </li>
        <li>
          <span class="label label-success">No missing values</span>
        </li>
        <li>
          <span class="label label-success">No duplicate rows</span>
        </li>
        <li>
          <span class="label label-success">No defective rows</span>
        </li>
      </ul>

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

    <div class="valid file">
      <h4 class="file-heading">
        <div class="inner">
          <a class="file-name">github/okfn/test-data/master/<strong>a-third-file.csv</strong></a>
          <a class="file-count">Table 3 of 3</a>
          <div class="test-counts">
            <a class="label passed collapsed" data-toggle="collapse" href="#file_3_passed" aria-expanded="false" aria-controls="file_3_passed">6</a>
            <span class="label failed">0</span>
          </div>
        </div>
      </h4>

      <ul class="passed-tests result collapse" id="file_3_passed">
        <li>
          <span class="label label-success">No blank headers</span>
        </li>
        <li>
          <span class="label label-success">No duplicate headers</span>
        </li>
        <li>
          <span class="label label-success">No missing headers</span>
        </li>
        <li>
          <span class="label label-success">No missing values</span>
        </li>
        <li>
          <span class="label label-success">No duplicate rows</span>
        </li>
        <li>
          <span class="label label-success">No defective rows</span>
        </li>
      </ul>
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
