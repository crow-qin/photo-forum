<template>
  <div class="item">
    <div class="header-part f-a-c">
      <div class="avatar-box">
        <img class="auto-img" :src="item.userUrl" alt />
      </div>
      <h3 class="title">{{item.userName}}</h3>
      <p class="diff-date">{{item.date|formatDate}}</p>
    </div>
    <p class="comment-content">{{item.content}}</p>

  </div>
</template>

<script>
// eslint-disable-next-line
import { formatDate } from "../config/tool.js";
export default {
  props: {
    item: {
      type: Object
    }
  },
  // methods: {},
  filters: {
    formatDate
  }
};
</script>

<style lang="scss" scoped>
.item{
  padding: .3rem 0;

  .header-part{
    display: flex;
    margin-bottom: .1rem;

    .avatar-box{
      width: .66rem;
      height: .66rem;
      border-radius: 50%;
      background-color:rgba(7,17,27,.3);
      overflow: hidden;
      margin-right: .2rem;
    }

    .title{
      flex: 1;
      font-size: .26rem;
      color: rgba(7,17,27,.5);
    }
  }

  .comment-content{
    padding-left: .86rem;
    line-height: .45rem;
    font-size: .29rem;
  }

  .diff-date{
    color: rgba(7,17,27,.5);
    font-size: .22rem;
  }

}
</style>