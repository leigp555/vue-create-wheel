<template>
  <div class="eg">
    <h3><strong>{{ title }}</strong></h3>
    <div class="example">
      <component :is="component"/>
    </div>
    <div class="function">
      <Button class="button" v-if="!visible" @click="toggle">显示代码</Button>
      <Button class="button" v-if="visible" @click="toggle">隐藏代码</Button>
      <Button class="button" @click="copy">复制代码</Button>
    </div>
    <pre v-if="visible" class="language-html" v-html="html"></pre>
  </div>
</template>
<script lang="ts">
import Button from '../lib/button.vue'
import 'prismjs';
import './prismjs.scss'

const Prism = (window as any).Prism
import {computed, ref} from "vue";
import {openPopUp} from "../lib/openPopUp";
export default {
  components: {Button},
  props: {
    title: String,
    bool: Boolean,
    component: Object,
  },
  setup(props) {
    const title = props.title
    const component = props.component
    const visible = ref<Boolean>(true)
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggle = () => {
      visible.value = !visible.value
    }
    const copy=()=>{
      openPopUp({title:"成功复制",style:{top:"35vh",right:"10vw"}})
      navigator.clipboard.writeText(props.component.__sourceCode);
    }
    return {html, title, component, toggle, visible,copy}
  }
}
</script>

<style lang="scss" scoped>
.eg {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px 20px 40px 20px;
  background-color: #ffffff;
  >.example{
    padding: 10px;
    box-shadow: 0 0 1px 2px #d9d9d9;
    margin: 10px 0;
  }
  >h3{
    margin-bottom: 20px;
  }

  > .function {
    margin-bottom: 15px;
    > button {
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px 10px;
      background-color: black;
      color: white;
      border-radius: 8px;
      border: none;
      font-size: 14px;
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