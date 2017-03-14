<template>
  <div>
    <header class="main-header">
      <div class="pattern">
        <div class="inner">
          <div class="container">
            <logo/>
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
