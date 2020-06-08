<template>
  <section :class="{ 'el-container': true, 'is-vertical': direction === 'vertical' }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

<style></style>
