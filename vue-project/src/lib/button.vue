<template>
  <button v-bind="attrs">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  inheritAttrs:false,
  setup(props, context){
    const{attrs}=context
    return {attrs}
  }
}
</script>
