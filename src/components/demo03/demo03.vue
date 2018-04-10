<template>
  <div id="app-3">
      <input v-model="newItem" @keyup.enter="addNew"/>
      <ul>
          <!-- v-bind:class对class的控制 和双向数据绑定-->
         <li v-for="todo in todos" v-bind:class="{finished:todo.isFinished}" v-on:click="toggleFinish(todo)">
            {{todo.text}}
          </li>
      </ul>
  </div>
</template>
<script>
// import Vue from 'vue'
// import Element from 'element-li'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Element)

    export default{    
        name:'Demo03',
        data:function(){
           
            return{
                newItem:'',
                
                todos:[
                    // {text:'学习 js',isFinished:true},
                    // {text:'学习 css',isFinished:false},
                    // {text:'学习 html',isFinished:true},
                ],
                
            }
        },
        // watch:{
        //     todos:{
        //         handler:function(val,oldval){
        //           console.log(val,oldval)
        //         },
        //         deep:true
        //     }
        // },
        methods:{
            toggleFinish:function(todo){
               todo.isFinished=!todo.isFinished
                // console.log(item)
            },
            addNew:function(){
                this.todos.push({
                    text:this.newItem,
                    isFinished:false
                })
                // console.log(this.newItem)
            this.newItem=""
            // Store.save()
            }
        }
    }
</script>
