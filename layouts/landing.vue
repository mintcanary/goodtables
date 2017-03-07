<template>
  <div class="landing">
    <header class="main-header">
      <div class="inner">
        <div class="container">
          <logo/>
          <div class="text">
            <h1>Valid Data. Always.</h1>
            <p>
              Welcome to continuous validation for tabular data.
            </p>
            <a class="btn btn-default" href="#">Learn more</a>
            <a class="btn btn-primary" href="#">Sign in with GitHub</a>
          </div>
        </div>
      </div>
    </header>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter,
    Logo
  }
}
</script>
