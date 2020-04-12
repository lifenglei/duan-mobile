<template>
  <section class="vuex">
    <goBack title="vuex示例" />
    <div class="p-15">
      <div>{{ storeCount }}</div>
      <van-button class="store-btn" type="default" @click="ADD_COUNT(value)">同步增加</van-button>
      <van-button v-if="requesting" type="default" loading />
      <van-button v-else type="default" :loading="requesting" @click="addCountAsync">异步增加</van-button>
      <van-button class="store-btn" type="warning" @click="RESET_COUNT">重置</van-button>
      <p>请输入增加的值，默认为1</p>
      <van-field v-model="value" />
    </div>
  </section>
</template>

<script>
import goBack from '@components/goBack'
import { Button, Field } from 'vant'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'vuex',
  data() {
    return {
      requesting: false,
      value: 1,
    }
  },
  components: {
    goBack,
    [Button.name]: Button,
    [Field.name]: Field,
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['storeCount']),
  },
  methods: {
    // 将 `this.ADD_COUNT()` 映射为 `this.$store.commit('ADD_COUNT')`
    ...mapMutations(['ADD_COUNT', 'RESET_COUNT']),
    // 将 `this.incrementAsync()` 映射为 `this.$store.dispatch('incrementAsync')`
    ...mapActions(['incrementAsync']),
    addCountAsync() {
      this.requesting = true
      this.incrementAsync(this.value).then(() => {
        this.requesting = false
      })
    },
  },
}
</script>

<style scoped lang="less">
.vuex {
  .p-15 {
    padding: 15px;
  }
  p {
    margin: 15px 0;
  }
  button {
    width: 100px;
    margin: 15px 0;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
