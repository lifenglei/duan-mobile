<template>
  <div>
    <div class="goback">
      <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="goBack" />
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'goBack',
  components: {
    [NavBar.name]: NavBar,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
