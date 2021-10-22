export default {
  state:()=>({
    posts:[],
    post:{},
  }),
  getters:{
   getPosts(state){
     return state.posts;
   },
    getPost(state){
      return state.post;
    }
  },
  actions:{
    nuxtServerInit(){
      console.log('inti server');
    }
  },
  mutations:{
    fetchPosts(state,posts){
      return state.posts = posts;
    },
    fetchPost(state,post){
      return state.post = post;
    }
  }
}
