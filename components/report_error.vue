<template>
  <div class="result">
    <div>
      <span class="count">{{ count }} x</span>
      <span v-if="count === '1'" class="label label-danger">{{ title }}</span>
      <span v-else class="label label-danger">{{ title }}s</span>
      <span class="help" data-toggle="popover" :title="helptitle" :data-content="description" data-placement="left" rel="popover"><span class="icon-info"><i>What is this?</i></span></span>
    </div>
    <div class="table-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    props: ['title', 'count', 'description', 'helptitle', 'type'],
    mounted: () => {
      $('[rel="popover"]').popover({
        html: true
      })
    }
  }
</script>
