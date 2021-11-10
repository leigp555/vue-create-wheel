<template>
 <div class="layout">
   <TopNav/>
   <aside v-if="menuVisible" >
     <h2>组件列表</h2>
     <ol>
       <li>
         <router-link to="/doc/switch">Switch 组件</router-link>
       </li>
       <li>
         <router-link to="/doc/button">Button 组件</router-link>
       </li>
       <li>
         <router-link to="/doc/dialog">Dialog 组件</router-link>
       </li>
       <li>
         <router-link to="/doc/tabs">Tabs 组件</router-link>
       </li>
     </ol>
   </aside>
   <div class="gulu-content" >
     <div class="replace" v-if="menuVisible"></div>
     <main>
       <router-view />
     </main>
   </div>

 </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue'
import {inject, Ref} from "vue";
export default {
  components:{TopNav},
  setup(){
    const menuVisible=inject<Ref<boolean>>("xxx")
    return {menuVisible}
  }

}
</script>

<style lang="scss" scoped>
.layout{
  height: 100vh;
  position: relative;
}
aside{
  width: 150px;
  height: 100%;
  padding: 16px 0;
  background: lightblue;
  position: fixed;
  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
.gulu-content{
  height: 100%;
  margin-top: 60px;
  display: flex;
  >.replace{
    width: 150px;
    height: 100%;
    flex-shrink: 0;
    padding: 16px 0;
  }
  >main{
    text-wrap: normal;
    flex-grow: 1;
    padding: 16px;
    background: white;
    height: 100%;
  }
}
</style>