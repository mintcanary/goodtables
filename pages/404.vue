<template>
  <div class="error-page">
    <section class="inner">
      <h1>
        This page could not be found (404)
      </h1>
      <maze/>
      <logo/>
    </section>
  </div>
</template>
<script>
import Maze from '~/components/maze.vue'
import Logo from '~/components/Logo.vue'

export default {
  props: ['error'],
  components: {
    Maze,
    Logo
  },
  layout: 'minimal',
  head () {
    return {
      title: `Goodtables 404`
    }
  }
}
</script>
