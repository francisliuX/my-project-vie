<template>
  <div id="app-2">
      <span v-bind:title="message">
          鼠标悬停查看动态信息
      </span>
  </div>
</template>
<script>
    export default{
        name:'Demo02',
        data(){
            return{
                message:"页面加载于"+new Date().toLocaleString()
            }
        }
    }
</script>