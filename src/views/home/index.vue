<template>
  <section class="home">
    <van-cell-group title="vant组件示例">
      <van-cell title="商品详情" is-link to="goods" />
      <van-cell title="购物车" is-link to="cart" />
      <van-cell title="用户中心" is-link to="user" />
    </van-cell-group>
    <van-cell-group title="请求接口示例">
      <van-cell title="请求接口" is-link to="request" />
    </van-cell-group>
    <van-cell-group title="vuex示例">
      <van-cell title="vuex" is-link to="vuex" />
    </van-cell-group>
  </section>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  watch: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.home {
  min-height: 100%;
  position: relative;
  padding-bottom: 50px;
  h1 {
    .tc();
    padding: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    a {
      .sc(12px, #969799);
    }
  }
}
</style>
