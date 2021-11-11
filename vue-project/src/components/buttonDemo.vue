<template>
 <div>
   <FirstExample @click="update" @focus="update" >你好</FirstExample>
 </div>
</template>
<script lang="ts">
import FirstExample from '../lib/button.vue'
export default {
  components:{FirstExample},
  setup(){
    const update=()=>{
      console.log("hello button")
    }
    return {update}
  }
}
</script>