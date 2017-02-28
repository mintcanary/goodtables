<template>
  <section class="container">

    <span>
      This page is loaded from the {{ name }}
    </span>

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
