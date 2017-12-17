<template>
  <li>
    <span v-if="count === '1'" class="label label-danger">{{ count }} error</span>
    <span v-else class="label label-danger">{{ count }} errors</span>
    <slot></slot>
    {{ name }}
  </li>
</template>

<script>
  export default {
    props: ['name', 'count']
  }
</script>
