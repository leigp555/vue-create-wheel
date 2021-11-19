<template>
  <h2><strong>Switch组件示例</strong></h2>
    <Example title="常规用法" :component="FirstExample" />
    <Example title="支持disabled" :component="SecondExample" />
</template>
<script lang="ts">
import FirstExample from "./example/eg1-switch.vue"
import SecondExample from "./example/eg2-switch.vue"
import Example from './switchExample.vue'
export default {
  components:{Example},
  setup(){
    return {FirstExample,SecondExample}
  }
}
</script>

