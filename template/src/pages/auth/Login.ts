import { Permission } from '@/model/auth/Permission'
import User from '@/model/auth/User'
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component({
  components: {}
})
export default class Login extends Vue {
  @Action('user') setUser: (u: User) => {}
  @Action('permission') setPermission: (p: Permission[]) => {}

  mounted() {
    this.setPermission([Permission.testpermission])
    this.setUser(new User())
    this.$router.replace({ name: 'mainFrame' })

    // EmployeeApi.getPermission()
    //   .then((resp) => {
    //     this.setUser(resp.data)
    //     this.setPermission(resp.data.permissionIds)
    //     this.$router.replace({ name: 'mainFrame' })
    //   })
    //   .catch((e) => {
    //     this.$alert(e.message, '提示', {
    //       confirmButtonText: '知道了'
    //     })
    //   })
  }
}
