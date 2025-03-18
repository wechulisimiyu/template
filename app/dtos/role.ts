import { BaseModelDto } from '@adocasts.com/dto/base'
import Role from '#models/role'
import { RoleName } from '#enums/roles'
import UserDto from '#dtos/user'

export default class RoleDto extends BaseModelDto {
  declare id: number
  declare name: RoleName
  declare createdAt: string
  declare updatedAt: string
  declare users: UserDto[]

  constructor(role?: Role) {
    super()

    if (!role) return
    this.id = role.id
    this.name = role.name
    // this.createdAt = role.createdAt.toISO()!
    // this.updatedAt = role.updatedAt.toISO()!
    this.users = UserDto.fromArray(role.users)
  }
}
