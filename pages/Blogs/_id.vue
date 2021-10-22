<template>
<div class="post-container">
  <h3 class="title">{{getPost.title}}</h3>
  <p class="post-body">{{getPost.body}}</p>
</div>
</template>

<script>
export default {
  name: "_id",
  validate({params}){
      return !isNaN(params.id);
  },
  computed:{
    getPost({$store}){
      return $store.getters.getPost;
    }
  },
  head(){
    return{
      title:this.getPost.title
    }
  },
  fetch({$axios,store,route}) {
    return $axios.$get(`/posts/${route.params.id}`)
      .then((res)=>{
        store.commit('fetchPost',res);
      })
  }
}
</script>

<style scoped>
.post-container{
  max-width: 900px;
  margin: auto;
}
.title{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.post-body{
  padding: 10px;
  border:1px solid #cccc33;
  border-radius: 5px;
}
</style>
