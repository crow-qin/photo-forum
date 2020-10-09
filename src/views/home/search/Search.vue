<template>
  <div class="box-all bg-f8">
    <Bar />
    <div class="f-a-c p-8">
      <input type="text" v-model="text" class="f1 ipt-box f-14" />
      <div class="f-16 ipt-text t-center">搜索</div>
    </div>
    <div class="muti-omit">
      这里 10px 是颗粒度，颗粒度越小，效果越好。注意，颗粒度与行间距有关，颗粒度小，行间距最好为 0，颗粒度大可以有适量的行间距，但是建议依然是 0。
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Bar from "@/components/Bar.vue";

@Component({
  components: {
    Bar,
  },
})
export default class Search extends Vue {
  private text: string = "";
}
</script>

<style lang="scss" scoped>
.ipt {
  &-box {
    line-height: 40px;
    padding: 0 8px;
  }
  &-text {
    width: 60px;
    line-break: 44px;
    cursor: pointer;
  }
}
</style>