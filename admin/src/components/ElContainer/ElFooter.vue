<template>
  <footer class="el-footer" :style="height">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'ElFooter',
  setup(props) {
    console.log(props.direction)
  }
}
</script>

<style></style>
