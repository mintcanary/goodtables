<template>
  <div>
    <logo/>
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
