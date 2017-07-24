<template>
  <div class="app" :class="view">
    <div class="inner">
      <nav class="main-nav">
        <logo/>
        <PrimaryNav/>
        <SecondaryNav usertext="Log out"/>
      </nav>
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'
import PrimaryNav from '~components/primary_nav.vue'
import SecondaryNav from '~components/secondary_nav.vue'
import $ from 'jquery'

export default {
  components: {
    Logo,
    PrimaryNav,
    SecondaryNav
  },
  mounted: () => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },
  data () {
    return {
      view: 'default-view'
    }
  }
}
</script>
