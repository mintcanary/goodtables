<template>
  <section class="container">

    <p class="loaded-from">
      <span>This page is loaded from the {{ name }}</span>
    </p>

    <h1>Style Guide</h1>

    <h2>Tabs</h2>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#github" aria-controls="github" role="tab" data-toggle="tab">GitHub</a></li>
      <li role="presentation"><a href="#s3" aria-controls="s3" role="tab" data-toggle="tab">S3</a></li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="github">
        GitHub tab
      </div>
      <div role="tabpanel" class="tab-pane" id="s3">
        S3 tab
      </div>
    </div>


    <h2>Panels</h2>

    <div class="panel panel-success">...</div>
    <div class="panel panel-warning">...</div>
    <div class="panel panel-danger">...</div>


    <h2>Buttons</h2>

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

  </section>
</template>

<script>
export default {
  data ({ req }) {
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
