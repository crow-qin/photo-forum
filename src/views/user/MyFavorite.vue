<template>
  <div class="w-all h-min-all f-column f-14 color-3">
    <Bar title="我的喜欢" />
    <div class=" f-column f1 p-16">
      <div class="w-all">10篇</div>
      <div class="">
        <div class="w-all h-all">
          <div class="f-a-c f-j-sb">
            <p>2020年8月</p>
            <p>3篇</p>
          </div>
          <div class="img-content w-all f-wrap">
            <div class="bg-f8 img-item" v-for="v in list" :key="v"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, State } from "vuex-class";
import Bar from "@/components/Bar.vue";

@Component({
  components: {
    Bar,
  },
})
export default class MyFavorite extends Vue {
  // data
  private list: any[] = [1, 2, 3, 4];

  // @State currentUser:any
  @Getter currentUserList:any

  mounted() {
    console.log(this.currentUserList)
  }
}
</script>

<style lang="scss" scoped>

.img {
  &-content {
    justify-content: space-between;
    &::after {
      content: '';
      width: 90px;
      height: 0px;
    }
  }

  &-item {
    width: 90px;
    height: 120px;
    margin-top: 8px;
    
  }
}
</style>