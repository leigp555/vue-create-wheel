<template>
  <h2><strong>Switch组件示例</strong></h2>
  <div class="eg">
    <h3><strong>常规用法</strong></h3>
    <Switch v-model:value="bool"/>
    <button >复制下面代码</button>
    <pre v-text="FirstExample.__sourceCode"></pre>
  </div>
  <div class="eg">
    <h3><strong>支持disabled</strong></h3>
    <Switch disabled/>
    <button>复制下面代码</button>
    <pre v-text="SecondExample.__sourceCode"></pre>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/switch.vue'
import FirstExample from "./example/eg1-switch.vue"
import SecondExample from "./example/eg2-switch.vue"
import {ref} from "vue";
export default {
  components:{Switch},
  setup(){
    const bool= ref<Boolean>(false)
    return {bool,FirstExample,SecondExample}
  }

}
</script>
<style lang="scss" scoped>
.eg{
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 20px 20px 40px 20px;
  background-color: #ffffff;
  >p{
    margin-bottom: 10px;
  }
  >button{
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px 15px;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
  }
  >pre{
    background-color: #f8f8f8;
    color: #52575c;
    font-family: "Source Code Pro",sans-serif;
  }
}
</style>
