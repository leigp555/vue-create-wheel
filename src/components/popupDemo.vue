<template>
  <div class="eg">
    <h3><strong>Popup组件示例:</strong></h3>
    <div class="example">
      <PopUp/>
    </div>
    <Button v-if="visible" class="button" @click="codeVisible">隐藏代码</Button>
    <Button v-if="!visible" class="button" @click="codeVisible">显示代码</Button>
    <Button class="button" @click="toggle">复制代码</Button>
    <pre v-if="visible" class="language-html" v-html="html"></pre>
  </div>
</template>

<script lang="ts">
import Button from "../lib/button.vue"
import PopUp from "./popUpExample.vue"
import {openPopUp} from "../lib/openPopUp";
import 'prismjs';
import './prismjs.scss'
import {computed, ref} from "vue";

const Prism = (window as any).Prism
export default {
  components: {PopUp, Button},
  setup() {
    const visible = ref<Boolean>(true)
    const codeVisible = () => {
      visible.value = !visible.value
    }
    const toggle = () => {
      openPopUp({
        title: "成功复制",
        style:{top:"35vh",right:"10vw"}
      })
      navigator.clipboard.writeText(PopUp.__sourceCode);
    }
    const html = computed(() => {
      return Prism.highlight(PopUp.__sourceCode, Prism.languages.html, 'html')
    })
    return {html, visible, toggle, codeVisible}
  }
}
</script>

<style lang="scss" scoped>
.eg {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px 20px 40px 20px;
  background-color: #ffffff;

  > h3 {
    margin-bottom: 20px;
  }

  > .example {
    padding: 10px;
    box-shadow: 0 0 1px 2px #d9d9d9;
  }

  > .button {
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
      font-size: 16px;
    }
  }
}
</style>


