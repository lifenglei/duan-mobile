<template>
  <section class="request">
    <goBack title="请求示例" />
    <van-button type="primary" class="request-btn" @click="request" :disabled="list.length > 0">请求数据</van-button>
    <van-button type="default" class="request-btn" @click="reset" :disabled="list.length === 0">重置数据</van-button>
    <div class="loding-wrapper">
      <van-loading v-if="requesting" />
    </div>
    <van-panel :title="item.title" :desc="item.hint" v-for="(item, index) in list" :key="index">
      <div>
        <img :src="item.image" />
      </div>
    </van-panel>
  </section>
</template>

<script>
import _ from 'lodash'
import goBack from '@components/goBack'
import { Button, Panel, Loading } from 'vant'
import { getList } from '@api/api-test'

export default {
  name: 'request',
  data() {
    return {
      list: [],
      requesting: false,
    }
  },
  components: {
    [Loading.name]: Loading,
    [Button.name]: Button,
    [Panel.name]: Panel,
    goBack,
  },
  watch: {},
  mounted() {},
  methods: {
    request() {
      this.requesting = true
      if (this.list.length > 0) {
        return
      }
      getList()
        .then((res) => {
          if (_.get(res, 'data.top_stories')) {
            this.list = res.data.top_stories
          }
        })
        .finally(() => {
          this.requesting = false
        })
    },
    reset() {
      if (this.list.length === 0) {
        return
      } else {
        this.list = []
      }
    },
  },
}
</script>

<style scoped lang="less">
.request {
  .request-btn {
    margin: 15px;
  }
  .van-panel__content {
    padding: 20px;
  }
  .loding-wrapper {
    .tc();
  }
}
</style>
