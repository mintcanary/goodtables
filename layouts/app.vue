<template>
  <div class="app" :class="menuView">
    <div class="inner">
      <nav class="main-nav">
        <no-ssr>
          <logo/>
        </no-ssr>
        <PrimaryNav/>
        <SecondaryNav loggedin="true"/>
        <a v-on:click="menuView = 'collapsed-menu-view'" class="collapse-view left">Collapse sidebar</a>
      </nav>
      <div class="content">
        <nuxt/>
        <a v-on:click="menuView = 'default-menu-view'" class="expand-view right">Collapse sidebar</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PrimaryNav from '~/components/primary_nav.vue'
import SecondaryNav from '~/components/secondary_nav.vue'
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
      menuView: 'default-menu-view'
    }
  }
}
</script>
