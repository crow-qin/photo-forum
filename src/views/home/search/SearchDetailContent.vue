<template>
    <div class="w-all" :style="heightStyle"></div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({

})
export class SearchdetailContent extends Vue {
    private height: number = 0

    get heightStyle(): string {
        return `height: ${this.height}`
    }
    mounted() {
        // this.height = this.$router.query
    }
}
</script>