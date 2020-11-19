<template>
<div class="box-all bg-f8">
  <Bar title="编辑资料" />

  <FormItem text="头像" :hasLine="true">
    <img class=" box-60 b-r-half" :src="user.avatarUrl?user.avatarUrl:require('../../../public/static/user-img/avatar.png')" alt="" >
  </FormItem>
  <FormItem text="ID" :value="user.account" :hasLine="true" :clickable="false"></FormItem>
  <FormItem text="昵称" :value="user.nickname" @onClick="openPage('change-name')"></FormItem>
  <FormItem text="性别" :value="user.gender" :hasLine="true" ></FormItem>
  <FormItem text="手机号码" :value="user.phone" :hasLine="true"></FormItem>
  <FormItem class=" m-t-8" text="退出登录" @onClick="openPage('login')"></FormItem>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'
// import {State} from 'vuex-class'
import Bar from '@/components/Bar.vue'
import FormItem from '@/components/common/FormItem.vue'
import { User } from "@/utils/types/common";

@Component({
  components: {
    Bar,
    FormItem,
  },
})

export default class UserCenter extends Vue {
  private user: User = {
    account: '123',
    password: '123',
    nickname: '',
    avatarUrl: ''
  }
  
  openPage(name: string, obj: any = {}):void {
    this.$router.push({name, query: obj})
  }
}
</script>

<style>
</style>
