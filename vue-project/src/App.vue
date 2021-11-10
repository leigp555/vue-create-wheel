<template>
 <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from "vue";

export default {
  setup(){
    const width =document.documentElement.clientWidth
    const menuVisible =ref(width > 500)
    provide("xxx",menuVisible)
  }
}
</script>

