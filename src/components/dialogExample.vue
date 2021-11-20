<template>
  <div class="eg">
    <h3><strong>{{ title }}</strong></h3>
    <component :is="component"/>
    <Button v-if="!visible" @click="toggle">显示代码</button>
    <Button v-if="visible" @click="toggle">隐藏代码</button>
    <Button @click="copy">复制代码</button>
    <pre v-if="visible" class="language-html" v-html="html"></pre>
  </div>
</template>


<script lang="ts">
import Button from "../lib/button.vue"
import 'prismjs';
import './prismjs.scss'
const Prism = (window as any).Prism
import {computed, ref} from "vue";
import {openPopUp} from "../lib/openPopUp";
export default {
  props: {
    title: String,
    component: Object,
  },
  components:{Button},
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
      openPopUp({title: "成功复制",style:{top:"35vh",right:"10vw"}})
      console.log("ok")
      navigator.clipboard.writeText(props.component.__sourceCode);
    }
    return {html, title, component, toggle, visible,copy}
  }
}
</script>

<style lang="scss" scoped>
.eg {
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 20px 20px 40px 20px;
  background-color: #ffffff;
  > h3 {
    margin-bottom: 10px;
  }
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

  > pre {
    background-color: #f8f8f8;
    color: #52575c;
    font-family: "Source Code Pro", sans-serif;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
}
</style>