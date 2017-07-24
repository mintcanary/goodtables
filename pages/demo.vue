<template>
  <div>
    <div class="primary-secondary">
      <h1>One-time validation</h1>
      <div>
        <section class="main form">
          <DemoForm/>
        </section>
        <section class="aside">
          <div>
            <h3 class="aside-title">How to use goodtables</h3>
            <p>There are several ways to use goodtables.io</p>
            <ul>
              <li>Use the form on this page to try goodtables.io out by manually adding data sources you would like to validate.</li>
              <li>Create a user account to configure goodtables.io for <a href="https://goodtables.io">goodtables.io</a> continuous data validation</li> from GitHub or Amazon S3.
              <li>Developers can also look at the open source <a href="https://github.com/frictionlessdata/goodtables-py" target="_blank">python library that provides all the data validation logic</a>, or the <a href="https://github.com/frictionlessdata/goodtables-js" target="_blank">goodtables.io javascript client</a> for use in 3rd party applications.</li>
            </ul>
          </div>
        </section>
      </div>

    </div>

  </div>
</template>

<script>
  import DemoForm from '~components/DemoForm.vue'

  export default {
    layout: 'app-not-logged-in',
    components: {
      DemoForm
    },
    head () {
      return {
        title: `goodtables`
      }
    }
  }
</script>
