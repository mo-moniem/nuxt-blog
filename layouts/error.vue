<template>
  <div>
    <ERROR_404 v-if="error.statusCode==404" :code="error.statusCode" :message="error.message"/>
  </div>
</template>

<script>
import ERROR_404 from "../components/ERROR_404";
export default {
  name: "error",
  components: {ERROR_404},
  props:['error'],
  layout:'empty',
  mounted() {
    console.log(this.error)
  }
}
</script>

<style scoped>

</style>
