<template>
  <div class="home">
    <p class="text">这是我的数据</p>
    <div class="box"></div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="less" scoped>
.text{
  font-size: 1rem;
}
.box{
  width: 10rem;
  height: 10rem;
  background-color: aqua;
}
</style>
