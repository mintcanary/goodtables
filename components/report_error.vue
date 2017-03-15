<template>
  <div class="result panel panel-danger">
    <div class="panel-heading">
      <span class="text-uppercase label label-danger">error</span>
      <span class="count label">{{ count }}</span>
      <h5 v-if="count === '1'" class="panel-title">{{ title }}</h5>
      <h5 v-else class="panel-title">{{ title }}s</h5>
      <span class="help" data-toggle="popover" :title="helptitle" :data-content="description" data-placement="left" rel="popover"><span class="icon-info"><i>What is this?</i></span></span>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    props: ['title', 'count', 'description', 'helptitle'],
    mounted: () => {
      $('[rel="popover"]').popover({
        html: true
      })
    }
  }
</script>
