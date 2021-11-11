<template>
  <div>
    <FirstExample v-model:value="bool"/>
  </div>
</template>


<script lang="ts">
import FirstExample from '../lib/switch.vue'
import {ref} from "vue";
export default {
  components:{FirstExample},
  setup(){
    const bool= ref(false)
    return {bool}
  }

}
</script>
