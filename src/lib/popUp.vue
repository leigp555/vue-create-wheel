<template>
  <Teleport to="body">
    <div class="gulu-popup" v-bind="$attrs">{{ title }}</div>
  </Teleport>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const title = props.title
    return {title}
  }
}
</script>
<style lang="scss">
.gulu-popup {
  position: fixed;
  z-index: 999;
  top: 37vh;
  right: 20px;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: rgba(114, 228, 114, .5);
  color: white;
  animation: action 2.5s;
}

@keyframes action {
  0% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}
</style>