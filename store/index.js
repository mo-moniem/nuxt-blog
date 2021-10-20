export default {
  state:()=>({
    posts:[],
  }),
  getters:{
   getPosts(state){
     return state.posts;
   }
  },
  actions:{

  },
  mutations:{
    updatePosts(state,posts){
      return state.posts = posts;
    }
  }
}
