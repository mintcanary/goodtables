<template>
  <div class="result">
    <div>
      <span class="count">{{ count }} x</span>
      <span v-if="count === '1'" class="label label-danger">{{ title }}</span>
      <span v-else class="label label-danger">{{ title }}s</span>
      <span class="help" data-toggle="popover" :title="helptitle" :data-content="description" data-placement="left" rel="popover"><span class="icon-info"><i>What is this?</i></span></span>
    </div>
    <div class="table-view">
      <div class="inner">
        <slot></slot>
      </div>
    </div>
    <a v-if="count > '10'" class="show-more">Show more <span class="icon-keyboard_arrow_down"></span></a>
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
