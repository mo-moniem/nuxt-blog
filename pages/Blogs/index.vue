<template>
<div>
  <h1>Blogs</h1>
  <div class="container">
    <ul v-for="(post,index) in getPosts" :key="index">
      <li>{{post.id}}</li>
      <li>{{post.title}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Blog",
  data(){
    return{
    }
  },
  computed:{
    getPosts({$store}){
      return $store.getters.getPosts;
    }
  },
  fetch({$axios,store}) {
     return $axios.$get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        store.commit('updatePosts',res);
      })
  }
}
</script>

<style scoped>

</style>
