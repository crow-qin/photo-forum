<template>
  <div class="login">
    <Bar title="登录徒享" />
    <div class="login-box">
      <div class="ipt-box">
        <input type="text" placeholder="账号" @input="delTrim(userName,1)" v-model="userName" />
      </div>
      <div class="ipt-box">
        <input type="password" placeholder="请输入密码" @input="delTrim(password,2)" v-model="password" />
      </div>
      <p class="tip-title">登录遇到问题？</p>
    </div>
    <div class="login-btn" :class="{active:canPress}" @click="login()">登录</div>
  </div>
</template>
<script>
import Bar from "../components/Bar";
import { mapState, mapMutations } from "vuex";
import * as types from "../store/mutation-types";

export default {
  components: {
    Bar
  },
  data: () => ({
    userName: "",
    password: ""
  }),
  computed: {
    canPress() {
      return this.userName && this.password ? true : false;
    },
    ...mapState(["userList"])
  },
  methods: {
    ...mapMutations({ changeUser: types.CHANGE_USER }),
    delTrim(val, flag) {
      // console.log(/[\r ]/.test(val));
      val = val.split(/[\r ]/).join("");
      flag == 1 ? (this.userName = val) : (this.password = val);
    },
    login() {
      if (!this.canPress) {
        return;
      }
      // 是否存在于用户列表中
      let isLogin = this.userList.find(
        item => item.name == this.userName && item.password == this.password
      );
      // console.log(isLogin, this.userList);

      if (isLogin) {
        console.log("登陆成功");

        // 提示登录成功
        const toast = this.$createToast({
          txt: "登陆中...",
          mask: true,
          time: 0
        });
        toast.show();

        this.changeUser(isLogin.uid);

        setTimeout(() => {
          toast.hide();

          this.$router.replace({ name: "user" });
          // this.userName = "";
          // this.password = "";
        }, Math.ceil(Math.random() * 4) * 1000);
      } else {
        const toast = this.$createToast({
          time: 0,
          txt: "账号名或密码有错",
          type: "txt"
        });
        toast.show();

        setTimeout(() => {
          toast.hide();
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.login-box{
  padding: 1rem .4rem .6rem;
  position: relative;

  .ipt-box{
    border-bottom: .03rem solid rgba(7,17,27,.3);

    input{
      width: 100%;
      height: .6rem;
      border: none;
      outline: none;
      font-size: .3rem;
      color: rgba(7,17,27,.6);
      
      &::placeholder{
        font-size: .3rem;
        font-weight: 500;
        color:rgba(7,17,27,.3);
      }    
    }
   
    &:first-child{
      margin-bottom: .3rem;
    }
  }

  .tip-title{
    position: absolute;
    bottom: 0;
    right: .4rem;
    font-size: .25rem;
  }
}

.login-btn{
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: .88rem;
  text-align: center;
  color:#fff;
  background: rgba(7,17,27,.3);
  width: 100%;
  letter-spacing: 3px;
  border-radius: 5px;

  &.active{
    background:#99ccff;
  }
}
</style>