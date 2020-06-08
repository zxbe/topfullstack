<template>
  <header class="el-header" :style="height">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'ElHeader',
  setup(props) {
    console.log(props.direction)
  }
}
</script>

<style></style>
