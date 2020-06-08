<template>
  <main class="el-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'ElMain',
  setup(props) {
    name: 'ElMain'
    console.log(props.direction)
  }
}
</script>

<style></style>
