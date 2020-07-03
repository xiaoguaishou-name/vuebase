<template>
  <div>
    <button @click="count++">你点击了{{count}}次</button>
    <h2>自习时间到</h2>
  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        count:0
      }
    }
  }
</script>

<style scoped>
h2{
  color: pink;
}
</style>