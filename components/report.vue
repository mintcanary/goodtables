<template>
  <div class="goodtables-ui-report">

    <div v-if="report_data && !r.pass" v-for="r of report_data" class="invalid file">
      <h4 class="file-heading">
        <div class="inner">
          <a class="file-name">{{ r.path }}<strong>{{ r.name }}</strong> <span v-if="r.errors" class="badge" data-toggle="tooltip" data-placement="right" :title="r.errors.length + ' errors found for this table'">{{ r.errors.length }}</span></a>
          <span class="file-count">Table {{ r.number }} of {{ report_data.length }}</span>
        </div>
      </h4>

      <report-error v-for="(e, index) in r.errors" v-bind:title="e.name" v-if="e.messages" v-bind:count="e.messages.length" v-bind:messages="e.messages" v-bind:filenumber="r.number" v-bind:errornumber="index +1">
        <table class="table">
          <tbody>
            <tr v-for="tr of e.table.rows" v-bind:class="tr.status">
              <td class="result-row-index">{{ tr.line }}</td>
              <td v-for="c of tr.cells" v-bind:class="c.status">{{ c.label }}</td>
            </tr>
          </tbody>
        </table>
      </report-error>

      <ul class="passed-tests result" v-bind:id="'file_' + r.number + '_passed'">
        <li v-for="p of r.passes">
          <span class="label label-success">{{ p.name }}</span>
        </li>
      </ul>
    </div>

    <div v-if="report_data && r.pass" v-for="r of report_data" class="valid file">
      <h4 class="file-heading">
        <div class="inner">
          <a class="file-name">{{ r.path }}<strong>{{ r.name }}</strong></a>
          <span class="file-count">Table {{ r.number }} of {{ report_data.length }}</span>
        </div>
      </h4>

      <ul class="passed-tests result" v-bind:id="'file_' + r.number + '_passed'">
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
