<template>
  <header class="topnav">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/blogs">Blogs</nuxt-link>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.nuxt-link-exact-active {
  background-color: #04AA6D;
  color: white;
}
</style>
