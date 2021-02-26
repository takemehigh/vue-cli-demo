<template >
  <div>
    <el-container>
      <el-header>
        <div class="title">Vue Test</div>
        <router-link
          :to="{ name: 'helloworld', params: { flag: 1 }, query: { flag: 2 } }"
          >通过router-link 跳转go to helloworld</router-link
        >
        <router-link to="/demo1">通过router-link 跳转go to demo1</router-link>
        
      </el-header>
      <el-container>
        <el-main>
            <el-button  @click="goHelloworld">go to helloworld</el-button>
            <el-button  @click="goDemo1">go to demo1</el-button>
            <el-menu router>
                <el-submenu index='1'>
                    <template slot="title">
                      <i class="el-icon-s-data"></i>
                      <span>菜单要传值需要用 :route方式</span>
                    </template>
                    <el-menu-item index="/helloworldsub" :route="{ name: 'helloworld', params:{menu:'param'}, query: { menu: 'query' } }">用param传值只能用name,因为params只能用name来引入路由</el-menu-item>
                    <el-menu-item index="/demo1" :route="{ path: '/demo1', query: { menu: 'query' },params:{menu:'param'} }">用query传值</el-menu-item>
                </el-submenu>
            </el-menu>
             <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/home'">
                欢迎来到微人事！
            </div>
            <router-view class="1"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
     
    };
  },
  methods:{
      goHelloworld:function(){
                this.$router.push("/helloworldsub");

      },
      goDemo1:function(){                this.$router.push("/demo1sub");
}
  }
};
</script>