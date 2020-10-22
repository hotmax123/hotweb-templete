import { Permission } from './Permission'

export default class User {
  uuid: string = ''
  name: Nullable<string> = null
  permissionIds: Permission[] = []
}
