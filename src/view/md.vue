<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import {ref} from "vue";
export default {
  props: {
    path: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const md=ref<String>(null)
    import(props.path).then(result=>{
      md.value=result.default
    })
    return {md}
  }
}
</script>

<style lang="scss" scoped>
.markdown-body {
  background-color: #fffdf1;
  padding: 20px;
  font-size: 18px;
}
</style>