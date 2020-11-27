<template>
  <div class="Bar">
    <div v-if="isSearch" class="search-box" @click="tapSearch">
      <i class="cubeic-search"></i>
      <span>搜索</span>
    </div>
    <div v-else class="back-title">
      <i class="back-btn cubeic-back" @click="back"></i>
      <h3 v-if="title">{{title}}</h3>
      <slot name="center"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isSearch: {
      type: Boolean,
      default: false
    },
    addBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      if(this.addBack) {
        this.$emit('backFn')
        return 
      }
      this.$router.go(-1)
    },
    tapSearch() {
      this.$emit('tapSearch')
    }
  }
};
</script>
<style lang="scss" scoped>
.Bar{
  height: 44px;
  width: 100%;
  background-color: #66ccff;
  position: relative;
  flex: 0 0 44px;

  .search-box{
    position: absolute;
    left: 50%;
    top: 50%;
    height: 30px;
    transform: translate(-50%,-50%);
    width: 70%;
    // border: 1px solid rgba(7,17,27,.2);
    background-color: rgba(255,255,255,.3);
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color:rgba(7,17,27,.6);

    .my-search{
      font-size: 14px;
    }

    i{
      margin-right: 3px;
    }
  }
}
.back-title{
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
  // border-bottom: 1px solid rgba(7,17,27,.15);

  .back-btn{
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  h3{
    text-align: center;
    line-height: 44px;
    height: 100%;
    max-width: 60%;
    margin: 0 auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
  }
}
</style>