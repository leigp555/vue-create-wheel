<template>
  <ButtonExample title="常规用法" :component="Theme"/>
  <ButtonExample title="大小可调节" :component="Size"/>
  <ButtonExample title="不同等级" :component="Level"/>
  <ButtonExample title="支持禁用" :component="Disabled"/>
  <ButtonExample title="支持加载中" :component="Loading"/>
</template>
<script lang="ts">
import FirstExample from '../lib/button.vue'
import ButtonExample from "./buttonExample.vue"
import Theme from './example/eg1-button.vue'
import Size from './example/eg2-button.vue'
import Level from './example/eg3-button.vue'
import Disabled from './example/eg4-button.vue'
import Loading from './example/eg5-button.vue'
export default {
  components: {ButtonExample, FirstExample},
  setup(){
    return {Theme,Size,Level,Disabled,Loading}
  }
}
</script>
<style lang="scss" scoped>
.intro {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
}

.example {
  margin-bottom: 10px
}
</style>