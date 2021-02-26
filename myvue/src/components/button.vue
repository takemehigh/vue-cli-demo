<template>

<div>
<span>父组件传来的属性：{{flag}}</span>
<el-button type="success" plain @click="goBack()">成功按钮</el-button>
<el-button plain v-on:click="clickseta">调用父组建变量</el-button>
<el-button plain v-on:click="clickseta2('1')">显示</el-button>
<el-button plain v-on:click="clickseta2('0')">隐藏</el-button>
<el-button plain v-on:click="setParentVar">在自己的事件中直接修改父组件传过来的变量(不允许会报错)</el-button>
<el-button plain v-on:click="setParentVarByUpdate">用update:myprop修改父组件传过来的值</el-button>
</div>
    

</template>
<script>
    export default {
        name: 'setabutton',
        props:['flag'],
        
        methods:{
            clickseta:function(){
                if(this.flag=='1'){
                    this.$emit('setb','0')
                }
                else{
                    this.$emit('setb','1')
                }           
            },
            clickseta2:function(str){
                this.$emit('setb',str)
                               
            },
            setParentVar:function(){
                if(this.flag=='1'){
                    this.flag='0';
                }
                else{
                    this.flag=='1';
                }
                
            },
            setParentVarByUpdate:function(){
                console.log(this.flag)
                if(this.flag=='1'){
                    //this.flag='0'
                    this.$emit("update:flag","0");
                }
                else{
                    //this.flag='1'
                    this.$emit("update:flag","1");
                }
                
            },
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    }
</script>
  
