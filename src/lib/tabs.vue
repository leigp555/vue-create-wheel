<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
           @click="toggle(title)"
           v-for="(title,index) in titles"
           :class="{selected: title=== selected}"
           :key="index"
           :ref="el => {if(title===selected)selectedItem=el}"
      >
        {{title}}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component  :is="content" :key="content"/>
    </div>
  </div>
</template>


<script lang="ts">
import Tab from "./tab.vue"
import {computed, onMounted, ref, watchEffect} from "vue";

export default {
  name: "Tabs",
  components: {Tab},
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const selectedItem=ref(null)
    const indicator=ref<HTMLDivElement>(null)
    const container=ref<HTMLDivElement>(null)
    const defaults = context.slots.default()
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("子组件类型必须是Tab")
      }
    })
    const titles:String = defaults.map((item) => {
      return item.props.title
    })

    const content=computed(()=>{
      return defaults.filter((item)=>{
        return item.props.title===props.selected
      })[0]
    })
    const toggle=(title)=>{
      context.emit("update:selected",title)
    }
    onMounted(()=>{
      watchEffect(()=>{
          const {width,left:left1}=selectedItem.value.getBoundingClientRect()
          const {left:left2}=container.value.getBoundingClientRect()
          const totalLeft=left1-left2
          indicator.value.style.width=width +"px"
          indicator.value.style.left=totalLeft+'px'
      })
    })
    return {defaults, titles,content,toggle,container,indicator,selectedItem}
  }
}
</script>



<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
