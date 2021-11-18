<template>
    <div class="eg">
      <h3><strong>Tabs组件示例:</strong></h3>
      <div class="example">
        <TabsExample/>
      </div>
      <div class="button">
        <button @click="toggle">代码展示</button>
      </div>
      <pre v-if="visible" class="language-html" v-html="html"></pre>
    </div>
</template>

<script lang="ts">
import TabsExample from "./example/eg1-tab.vue"
import 'prismjs';
import './prismjs.css'
import {computed, ref} from "vue";
const Prism = (window as any).Prism
export default {
  components: {TabsExample},
  setup() {
    const visible=ref<Boolean>(true)
    const toggle=()=>{
      visible.value=!visible.value
    }
    const html=computed(()=>{
      return Prism.highlight(TabsExample.__sourceCode, Prism.languages.html, 'html')
    })
    return {TabsExample,html,visible,toggle}
  }
}
</script>

<style lang="scss" scoped>
.eg {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px 20px 40px 20px;
  background-color: #ffffff;
  >h3{
    margin-bottom: 20px;
  }
  >.example{
    padding: 20px;
    box-shadow: 0 0 2px 2px #d9d9d9;
  }
  > .button {
    margin-bottom: 15px;
    > button {
      margin-top: 20px;
      margin-bottom: 10px;
      padding:10px 15px;
      background-color: black;
      color: white;
      border-radius: 8px;
      border: none;
      @media(max-width: 500px) {
        height: 32px;
        padding: 0 10px;
        font-size: 14px;
      }
    }
  }

  > pre {
    background-color: #f8f8f8;
    color: #52575c;
    font-family: "Source Code Pro", sans-serif;
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
}
</style>


