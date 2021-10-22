<template>
<div>
  <AppHeader/>
  <Nuxt/>
  <AppFooter/>
</div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  name: "default",
  components: {AppFooter, AppHeader}
}
</script>

<style >
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.mainTitle{
  text-align: center;
  margin: 10px auto;
}
</style>
