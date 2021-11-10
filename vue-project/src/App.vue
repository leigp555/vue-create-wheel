<template>
 <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from "vue";

export default {
  setup(){
    const menuVisible =ref(false)
    provide("xxx",menuVisible)
  }
}
</script>

