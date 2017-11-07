<template>
  <div class="app">
    <div class="inner">
      <nav class="main-nav">
        <logo/>
        <div class="text">
          <h3>What is goodtables.io?</h3>
          <p>
            goodtables.io is a free online service for continuous data validation. goodtables.io checks tabular data sources for structural problems, such as blank rows and non-tabular input, and optionally checks the data against a given schema, providing robust quality assurance for your data. goodtables.io supports many formats used for tabular data storage, including CSV, Excel, JSON, and ODS. Read more about the bad data problems goodtables.io can address <a href="http://okfnlabs.org/bad-data/" target="_blank">here</a>.
          </p>
        </div>
        <SecondaryNav usertext="Log in"/>
      </nav>
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SecondaryNav from '~/components/secondary_nav.vue'
import $ from 'jquery'

export default {
  components: {
    Logo,
    SecondaryNav
  },
  mounted: () => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}
</script>
