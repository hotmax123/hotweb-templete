import { Component, Vue, Prop } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import store from '@/store'

@Component({})
export default class BasicLayout extends Vue {
  @Prop({ type: Boolean, default: false }) isCollapse: boolean
  @State('device') device: string
  @State('sidebar') sidebar: any

  get classObj() {
    return {
      mobile: this.device === 'mobile'
    }
  }
  get sliderClass() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation
    }
  }

  mounted() {}

  doClickOutside() {
    store.commit('close_sidebar', { withoutAnimation: false })
  }
}
