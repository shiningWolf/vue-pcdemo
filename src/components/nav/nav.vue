<template>
  <div>
    <el-menu :default-active="activeIndex" 
    		class="el-menu-demo" 
    		mode="horizontal" 
    		background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
        @select="handelSelect">
	  	<el-menu-item v-for="(item,index) in list" :index="item">{{item.slice(1)}}</el-menu-item>
  	</el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props:{
  	list:{
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex:""
    }
  },
  created(){
    this.activeIndex = this.list[0];
  },
  methods:{
    handelSelect(key){
      this.$store.commit('SET_CURPAGE',key);
      this.$router.replace(this.findRoute(key));
    },
    findRoute(name){
      let routePath = '';
      let route = this.$store.state.menuItem;
      for(let i=0;i<route.length;i++){
        if(route[i].path == name){
          routePath = route[i].children[0].path;
          break;
        }
      }
      return routePath;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
