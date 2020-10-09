<template>
  <div class="zh-item" @click="tozhDetail">
    <p class="title">{{item.title}}</p>
    <div class="item-pic">
      <img class="auto-img" v-if="item.images != undefined" :src="item.images[0]" alt />
      <img class="auto-img" v-else :src="item.image" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    tozhDetail() {
      this.$router.push({
        name: "zhdetail",
        params: { id: this.item.id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.zh-item{
  display: flex;
  justify-content: space-around;
  padding: 16px;
}
.title{
   word-break: break-all;
    word-wrap: break-word;
    white-space: pre-line;
    line-height: 20px;
    font-size: 15px;
    width: calc(100% - 1.5rem);
}
.item-pic{
  width: 60px;
  height: 60px
}
</style>