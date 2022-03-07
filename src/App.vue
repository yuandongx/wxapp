<template>
  <el-config-provider :locale="locale">
    <app />
  </el-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'
  import App from "~/view/Index.vue"
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'

  export default defineComponent({
    
    components: {
      ElConfigProvider,
      App
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>
