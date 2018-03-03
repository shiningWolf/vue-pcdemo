<template>
  <div>
  	<el-menu router :default-active="$route.path" 
        class="el-menu-demo">
      <template v-for="(item,index) in list" v-if="item.children.length>1">
        <el-submenu :index="item.name" v-if="category==item.path">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="(nitem,nindex) in item.children" :index="nitem.path">
            {{nitem.name}}
          </el-menu-item>
        </el-submenu>
      </template> 
      <template v-else>
        <el-menu-item :index="item.children[0].path" v-if="category==item.path">{{item.name}}</el-menu-item> 
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  props:{
    list:{
      type:Array,
      default:function(){
        return []
      }
    },
    category:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      activeIndex:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
