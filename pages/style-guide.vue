<template>
  <section class="container">

    <p class="loaded-from">
      <span>This page is loaded from the {{ name }}</span>
    </p>

    <h1>Style Guide</h1>

    <h2>Buttons <code>.btn</code></h2>

    <!-- Standard button -->
    <button type="button" class="btn btn-default">Default</button>

    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">Primary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-success">Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-info">Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-warning">Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-danger">Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-link">Link</button>

    <hr />

    <h2>Report <code>.goodtables-ui-report</code></h2>

    <report></report>

  </section>
</template>

<script>
  import Report from '~components/report.vue'

  export default {
    components: {
      Report
    },
    asyncData ({ req }) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    head () {
      return {
        title: `Style Guide (${this.name}-side)`
      }
    }
  }
</script>

<style lang="scss">
  .loaded-from {
    position: absolute;
    top: 25px;
    left: 0;
    width: 100%;
    color: #fff;
    display: block;
    text-align: right;
    pointer-events: none;

    span {
      display: block;
      max-width: 1170px;
      margin-left: auto;
      margin-right: auto;
      padding: 15px;
    }
  }
  .btn {
    margin-right: 10px;
  }
</style>
