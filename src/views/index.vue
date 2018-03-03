<template>
  <div>
    <el-row>
      <dh-nav :list="headList"></dh-nav>
    </el-row>
    <el-row>
      <el-col :span="6">
          <dh-leftmenu :list="itemList" :category="category"></dh-leftmenu>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import nav from '../components/nav/nav'
import leftmenu from '../components/leftmenu/leftmenu'
export default {
  name: 'index',
  data () {
    return {
      headList:[],
      itemList:[]
    }
  },
  components:{
    'dh-nav':nav,
    'dh-leftmenu':leftmenu
  },
  created(){
    this.headList = this.$store.state.headItem;
    this.itemList = this.$store.state.menuItem;
  },
  computed:{
    category(){
      return this.$store.state.curPage;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
