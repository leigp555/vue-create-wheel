<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      require: true
    }
  },
}
</script>

<style lang="scss" >
.markdown-body {
  background-color: #fffdf1;
  padding: 20px;
  font-size: 18px;
  >p{color: black}
  >pre{
    background-color: #f8f8f8;
    >code{
      color: black;
    }
  }
}
</style>