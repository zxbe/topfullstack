<template>
  <aside class="el-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '120px'
    }
  },
  setup(props) {
    console.log(props.width)
  }
}
</script>

<style></style>
