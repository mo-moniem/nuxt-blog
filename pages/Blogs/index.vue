<template>
<div>
  <h2 class="mainTitle">Blogs</h2>
  <div class="row">
    <div class="column" v-for="(post,index) in getPosts" :key="index">
      <div class="card">
        <h3>
          <nuxt-link :to="`/blogs/${post.id}`">{{post.title}}</nuxt-link>
        </h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
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
  head(){
    return{
      title:'blogs'
    }
  },
  fetch({$axios,store}) {
     return $axios.$get('/posts')
      .then((res)=>{
        store.commit('fetchPosts',res);
      })
  },
  mounted() {
  }
}
</script>

<style scoped>

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  margin: 10px 50px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
.card h3 a{
  text-decoration: none;
  color: #04AA6D;
  cursor: pointer;
}
</style>
