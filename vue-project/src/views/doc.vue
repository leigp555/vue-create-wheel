<template>
 <div>
   <TopNav/>
   <div class="gulu-topNave">
     <div class="logo"></div>
     <div class="menu"> </div>
   </div>
   <div class="gulu-content">
     <aside>边栏</aside>
     <main>主内容</main>
   </div>

 </div>
</template>
<script lang="ts">
import TopNav from '../components/Topnav.vue'
export default {
  components:{TopNav}
}
</script>