<template>
  <div class="eg">
    <h3><strong>{{title}}</strong></h3>
   <component :is="component"/>
    <button @click="toggle">代码展示</button>
    <pre v-if="visible" class="language-html" v-html="html"></pre>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/switch.vue'
import 'prismjs';
import './prismjs.css'
const Prism=(window as any).Prism
import {computed, ref} from "vue";
export default {
  components:{Switch},
  props:{
    title:String,
    bool:Boolean,
    component:Object,
  },
  setup(props){
    const title=props.title
    const component=props.component
    const visible=ref<Boolean>(true)
    const html=computed(()=>{
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggle=()=>{
        visible.value=!visible.value
    }
    return {html,title,component,toggle,visible}
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
    padding: 10px 15px;
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
  >pre{
    background-color: #f8f8f8;
    color: #52575c;
    font-family: "Source Code Pro",sans-serif;
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
}
</style>