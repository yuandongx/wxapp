<template>
<div>
  <div class="header border-line">122222223</div>
  <div>
    <div class="aside">
      <div class="left-side border-line content-height"><WxMenu /></div>
    </div>
    <div class="right">
      <div class="center-content content-height  border-line">center</div>
    </div>
  </div>
  <div class="footer border-line ">footer</div>
</div>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import WxMenu from "../components/menu/index.vue";
export default defineComponent({
  components: {
    WxMenu
  },
  setup() {
    
  },
})
</script>
<style scoped>
.header {
  height: 5vh;
}
.border-line {
  border-style: dashed;
  border-width: 2px;
  border-color: green;
}
.content-height {
  height: 90vh;
}
.aside {
  float: left;
  width: 10%;
}
.right {
  float: left;
  width: 90%;
}
.footer {
  height: 5%;
}
</style>