<template>
<div>
  <el-container>
    <el-header><top /></el-header>
    <el-main><div class="main-content">434444</div></el-main>
    <el-footer>333333333</el-footer>
  </el-container>
</div>
</template>
 
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Top from "./Top.vue"
import { Expand, Fold } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Top
  }
})
</script>
<style scoped>
.el-header{
  padding: 0;
}
.el-main {
  padding: 0;
}
.el-footer {
  padding: 0;
}
.main-content {
  height: 100vh;
}

</style
>