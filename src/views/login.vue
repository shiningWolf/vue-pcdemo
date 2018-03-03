<template>
  <div>
   	<el-row>
   		<el-col :span="10" :offset="7">
   			<el-form ref="form"  label-width="80px">
			  <el-form-item label="用户名">
			    <el-input v-model="username"></el-input>
			  </el-form-item>
			  <el-form-item label="密码">
			    <el-input v-model="password"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="login">登录</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
			</el-form>

   		</el-col>
   	</el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username:"",
      password:""
    }
  },
  methods:{
  	login(){
      let route = this.$router.options.routes;
      let headArr = [];
      let menuArr = [];
      for(var i=0;i<route.length;i++){
        if(route[i].name != 'login'){
          if(!headArr.includes(route[i].path)){
            headArr.push(route[i].path)
          }
          menuArr.push(route[i]);
        }
      }
      this.$store.commit('SET_CURPAGE',headArr[0]);
      this.$store.commit('SET_HEAD',headArr);
      this.$store.commit('SET_MENU',menuArr);
      this.$router.replace(menuArr[0].children[0].path);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
