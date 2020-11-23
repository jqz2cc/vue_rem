<template>
  <div class="about"
       id="about">
    <h1 @click="change">按钮 </h1>
    <div class="box-flex"></div>
    <!-- flex STRT -->
    <div class="flex_box">
      <div class="one">1</div>
      <div class="two">2</div>
      <div class="one">1</div>

    </div>
    <div class="flex_box">
      <div class="shrink_0 order_3">3</div>
      <div class="shrink_1 order_1">-1</div>
      <div class="shrink_1 order_2">2</div>
    </div>
    <!-- flex END -->
    <!-- <div class="item"
         v-for="(item) in 40"
         :key="item">{{item}}</div> -->
  </div>
</template>
<script>
  import mixin from './../mixin/mixin.js'
  // let scrollTop = null
  export default {
    mixins: [mixin],
    data() {
      return {
        message: 1,
      }
    },
    watch: {
      message(nv, ov) {
        console.log(nv, ov)
      },
    },
    mounted() {
      // console.log(1)
    },
    methods: {
      change() {
        this.message++;
      },
    },
    // deactivated() {
    //   scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //   localStorage.setItem($route.name, scrollTop)
    //   window.scroll(scrollTop, 0);
    //   alert(1)
    // },
    // activated() {
    //   if (localStorage.getItem($route.name)) window.scroll(scrollTop, localStorage.getItem($route.name))
    //   alert(2)
    // }
  }
</script>
<style lang="less" scoped>
h1{
  font-size: 40px;
}
.box-flex{
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
  .item {
    width: 100%;
    height: 5px;
    line-height: 5px;
  }
  .flex_box {
    display: flex;
    .shrink_0{
      flex-shrink: 1;
      width: 100px;
      background-color: red;
    }
    .shrink_1{
      flex-shrink: 0;
      width: 150px;
      background-color: burlywood;
    }
    .one {
      flex-grow: 1;
      background-color: aquamarine;
      height: 20px;
    }
    .order_1{
      order: -1;
    }
    .order_2{
      order: 0;
    }
    .order_3{
      // order: 9;
    }
    .two {
      flex-grow: 2;
      background-color: paleturquoise;
      height: 20px;
    }
  }
</style>
