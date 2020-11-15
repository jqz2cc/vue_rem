<template>
  <div class="home">
    <!-- <p class="text">这是我的数据</p>
    <div class="box"></div> -->
    <!-- test -->
    <div class="border-box">border-box</div>
    <div class="content-box">content-box</div>
    <div class="warp_box">
      <div class="inner_box"></div>
    </div>
    <div class="grid_container">
      <div class="item"
           v-for="item in colorArr"
           :key="item"
           :style="{'background-color':item}">{{item}}</div>
    </div>
    <div class="visi_box">
      <p>test1</p>
      <div class="display_none"></div>
      <p> test2</p>
      <div class="visibility_hidden"></div>
      <p>test3</p>
    </div>
    <div class="color">
      <div>这是color 测试数据</div>
    </div>
    <div class="p_box">
      <div class="c_item"
           v-for="item in 8"
           :key="item">这是第{{item}}个元素</div>
           <p class="c_item">哈哈哈  这是P元素</p>
    </div>
    <canvas id="mycanvas"
            width="200"
            height="200"></canvas>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
        colorArr: ['antiquewhite', 'aquamarine', 'blueviolet', 'burlywood', 'chartreuse', 'cornflowerblue', 'darkcyan', 'darkseagreen', 'fuchsia']
      }
    },
    created() {
      this.$nextTick(() => {
        var mycanvas = document.getElementById('mycanvas');
        var ctx = mycanvas.getContext('2d');
        console.log(ctx)
        ctx.moveTo(50, 50);
        ctx.lineTo(150, 50);
        ctx.lineTo(150, 150);
        ctx.lineTo(50, 150);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
      })
    },
    methods: {
    },
  }
</script>
<style lang="less" scoped>
  .home {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .text {
    font-size: 1rem;
  }
  .c_item {
    &:nth-child(2) {
      color: aqua;
    }
    &:only-of-type{
      color: brown;
    }
    &:nth-last-child(2){
      color: blueviolet;
    }
  }
  .color {
    color: coral;
    font-size: 20px;
  }
  .visi_box {
    width: 200px;
    height: 200px;
    .display_none {
      width: 50px;
      height: 50px;
      display: none;
    }
    .visibility_hidden {
      display: 50px;
      height: 50px;
      visibility: hidden;
    }
  }
  .grid_container {
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    .item {
      line-height: 100px;
    }
  }
  // .box {
  //   width: 10rem;
  //   height: 10rem;
  //   background-color: aqua;
  // }
  .warp_box {
    width: 200px;
    height: 200px;
    background-color: chartreuse;
    display: grid;
    .inner_box {
      width: 50px;
      height: 50px;
      background-color: antiquewhite;
      margin: auto;
    }
  }
  #mycanvas {
    width: 500px;
    height: 300px;
    border: 1px solid chartreuse;
  }
  .border-box {
    width: 200px;
    height: 200px;
    border: 10px solid tomato;
    background-color: aquamarine;
    box-sizing: border-box;
  }
  .content-box {
    width: 200px;
    height: 200px;
    border: 10px solid tomato;
    background-color: aquamarine;
    box-sizing: content-box;
  }
</style>
