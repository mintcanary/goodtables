<template>
  <div class="goodtables-ui-report">

    <div v-if="report_data && !r.pass" v-for="r of report_data" class="invalid file">
      <h4 class="file-heading">
        <div class="inner">
          <a class="file-name">{{ r.path }}<strong>{{ r.name }}</strong></a>
          <a class="file-count">Table {{ r.number }} of {{ report_data.length }}</a>
          <div class="test-counts">
            <a v-if="r.passes" class="label passed collapsed" data-toggle="collapse" v-bind:href="'#file_' + r.number + '_passed'" aria-expanded="false" v-bind:aria-controls="'file_' + r.number + '_passed'">{{ r.passes.length }}</a>
            <span v-else class="label passed">0</span>
            <span v-if="r.errors" class="label failed">{{ r.errors.length }}</span>
            <span v-else class="label failed">0</span>
          </div>
        </div>
      </h4>

      <ul class="passed-tests result collapse" v-bind:id="'file_' + r.number + '_passed'">
        <li v-for="p of r.passes">
          <span class="label label-success">{{ p.name }}</span>
        </li>
      </ul>

      <report-error v-for="e of r.errors" v-bind:title="e.name" v-bind:count="e.count" description="Header column is empty.">
        <table class="table">
          <tbody>
            <tr v-for="tr of e.table.rows" v-bind:class="tr.status">
              <td class="result-row-index">{{ tr.line }}</td>
              <td v-for="c of tr.cells" v-bind:class="c.status">{{ c.label }}</td>
            </tr>
          </tbody>
        </table>
      </report-error>
    </div>

    <div v-if="report_data && r.pass" v-for="r of report_data" class="valid file">
      <h4 class="file-heading">
        <div class="inner">
          <a class="file-name">{{ r.path }}<strong>{{ r.name }}</strong></a>
          <a class="file-count">Table {{ r.number }} of {{ report_data.length }}</a>
          <div class="test-counts">
            <a v-if="r.passes" class="label passed collapsed" data-toggle="collapse" v-bind:href="'#file_' + r.number + '_passed'" aria-expanded="false" v-bind:aria-controls="'file_' + r.number + '_passed'">{{ r.passes.length }}</a>
            <span class="label failed">0</span>
          </div>
        </div>
      </h4>

      <ul class="passed-tests result collapse" v-bind:id="'file_' + r.number + '_passed'">
        <li v-for="p of r.passes">
          <span class="label label-success">{{ p.name }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import ReportError from '~/components/report_error.vue'

  export default {
    components: {
      ReportError
    },
    props: ['report_data']
  }
</script>
