<template>
  <el-container direction="horizontal" class="demo">
    <el-aside width="200px">菜单</el-aside>
    <el-container>
      <el-header>全栈之巅 - 后台管理界面</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  ElContainer,
  ElAside,
  ElMain,
  ElHeader
} from '@/components/ElContainer'

export default {
  name: 'Home',
  components: {
    ElContainer,
    ElAside,
    ElMain,
    ElHeader
  }
}
</script>

<style lang="less" scoped>
.demo {
  height: 100vh;
}
</style>
