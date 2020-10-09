<template>
  <div class="tab-bar">
    <router-link class="bar-btn" to="/" tag="div">
      <i class="iconfont icon-home-fill"></i>
      <div>首页</div>
    </router-link>
    <router-link class="bar-btn" to="/add" tag="div">
      <div class="add iconfont icon-add-fill"></div>
    </router-link>
    <router-link class="bar-btn" to="/user" tag="div">
      <i class="iconfont icon-account"></i>
      <div>个人</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.tab-bar{
  width: 100%;
  flex: 0 0 51px;
  height: 51px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid rgba(7,17,27,.15);
  color: rgba(7,17,27,.3);
  


  .exactActive{
    color: #99ccff
  }

  .bar-btn{
    display: flex;
    flex-direction: column;
    
    i{
      line-height: 30px;
      font-size: 21px;
    }
    
    div{
      font-size: 11px;
    }

  }

  div.add{
    font-size: 42px;
    line-height: 50px;
  }
   
}
</style>