<template>
<div class="common-layout">
  <el-container>
    <el-aside :width="asideWidth">
      <x-menu :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <el-row align="middle">
          <el-col :span="1">
            <el-button type="text" @click="onSwitchMenu">
              <el-icon :size="36">
                <expand v-if="isCollapse"/>
                <fold  v-else/>
              </el-icon>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>3333333</el-main>
      <el-footer>12313</el-footer>
    </el-container>
  </el-container>
</div>
</template>
 
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Right from "./Right.vue"
import { Expand, Fold } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    "XMenu": Right,
    Expand,
     Fold
  },
  setup() {
    const isCollapse = ref<boolean>(true);
    const onSwitchMenu = () => {
      isCollapse.value = !isCollapse.value;
    }
    const asideWidth = computed(() => isCollapse.value ? 56: 120);
    return {
      isCollapse,
      onSwitchMenu,
      asideWidth
    }
  },
})
</script>
<style scoped>
header > div.el-row {
  height: 100%;
  padding: 0px;
  margin-left: -16px;
}
.common-layout .el-header,
.common-layout .el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
}

.common-layout .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 100vh;
}

.common-layout .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}

</style>