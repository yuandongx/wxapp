<template>
  <ul class="wx-ul">
      <li><a class="wx-a">111111</a></li>
      <li><a class="wx-a">222222</a></li>
      <li><a class="wx-a">333333</a></li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "WxMenu",
    setup() {
        
    },
})
</script>


<style scoped>
.wx-ul {
    list-style: none; /** list-style-type:none - 移除列表前小标志。*/
    overflow: auto;
    text-align: center;
    margin: 0;  /** 移除浏览器的默认设置将边距和填充设置为0 */
    padding: 0;
}
li a:active {
    background-color: green;
    color: white;
}
li a:hover {
    background-color: seagreen;
    color: white;
}
.wx-a {
    display: block;
    width: 100%;
    line-height: 3em;
}
</style>