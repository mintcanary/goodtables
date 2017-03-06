<template>
  <a class="add-item panel">
    <span class="inner">
      Add {{ item }}
    </span>
  </a>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
