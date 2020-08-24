<template>
  <div class="page-container">
    <h2 class="page-title">{{ title }}</h2>
    <h5 class="page-desc">{{ desc }}</h5>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewPage',
  props: {
    title: String,
    desc: String
  }
}
</script>

<style scoped>
.page-container {
  margin: 20px;
}
.page-title, .page-desc {
  margin: 20px 0;
}
</style>
