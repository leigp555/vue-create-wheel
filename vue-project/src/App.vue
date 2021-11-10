<template>
 <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from "vue";
import {router} from "./route";

export default {

  setup(){
    const width =document.documentElement.clientWidth
    const menuVisible =ref(width >500)
    provide("xxx",menuVisible)
    if(width<500){
      router.afterEach(()=>{
        menuVisible.value=!menuVisible.value
      })
    }
  }
}
</script>

