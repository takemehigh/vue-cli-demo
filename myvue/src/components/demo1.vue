<template>
    <div>
        <img v-if='a==1' src="../assets/logo.png">
        <h2>通过router params传过来的值：{{$route.params.menu}}</h2>
        <h2>通过router query传过来的值：{{$route.query.menu}}</h2>
        <setabutton @setb="seta" :flag="a" @update:flag='a=$event'/> 
    </div>
    
</template>

<script>
import setabutton from './button'

export default {
  name: 'demo1',
  components: {
    setabutton
  },
  props:['menu'],
  data(){
    return {a:'1'}
  },
  mounted() {
    window.demo1 = this;
    //this.init();
  },
  methods:{
    seta:function(str){
        this.a=str;
    }
  }
}
</script>