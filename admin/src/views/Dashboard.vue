<template>
  <el-container class="demo">
    <el-header>Header</el-header>
    <el-container direction="horizontal">
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ElContainer, ElAside, ElMain } from '@/components/ElContainer'

export default {
  name: 'Home',
  components: {
    ElContainer,
    ElAside,
    ElMain
  }
}
</script>

<style lang="less" scoped>
.demo {
  height: 100vh;
}
</style>
