<template>
  <div class="app" :class="view">
    <div class="inner">
      <nav class="main-nav">
        <logo/>
        <ul class="nav primary">
          <li class="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Manage Sources</a>
          </li>
        </ul>
        <ul class="nav secondary">
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </nav>
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'
import $ from 'jquery'

export default {
  components: {
    Logo
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
