<template>
  <div class="intro">常规用法</div>
 <div>
   <FirstExample>button</FirstExample>
   <FirstExample theme="link">link</FirstExample>
   <FirstExample theme="text">text</FirstExample>
 </div>
  <div class="intro">大小可调节</div>
  <div>
    <FirstExample size="big">button</FirstExample>
    <FirstExample size="normal" theme="link">link</FirstExample>
    <FirstExample size="small" theme="text">text</FirstExample>
  </div>
</template>
<script lang="ts">
import FirstExample from '../lib/button.vue'
export default {
  components:{FirstExample},
}
</script>
<style lang="scss" scoped>
.intro{
  margin-bottom: 20px;
  margin-top:20px;
  font-size: 20px;
}
</style>