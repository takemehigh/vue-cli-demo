<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ flag }}</h1>
    <h1>{{ flag1 }}</h1>
    <h2>Essential Links</h2>
    <h2>通过router params传过来的值：{{$route.params.menu}}</h2>
    <h2>通过router query传过来的值：{{$route.query.menu}}</h2>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  props:['flag','menu'],
  data () {
    return {
      msg: 'CNM'
    }
  },
  computed:{
    flag1:function(){
      return this.$route.params.flag;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
