<template>
  <slot />
</template>
<script lang="ts">
export default {
  name: "Tab",
  inheritAttrs: false     //消除title没有被解析的警告
}
</script>