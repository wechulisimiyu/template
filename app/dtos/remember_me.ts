import { BaseModelDto } from '@adocasts.com/dto/base'
import RememberMe from '#models/remember_me'

export default class RememberMeDto extends BaseModelDto {
  declare id: number
  declare createdAt: string
  declare updatedAt: string

  constructor(rememberMe?: RememberMe) {
    super()

    if (!rememberMe) return
    this.id = rememberMe.id
    // this.createdAt = rememberMe.createdAt.toISO()!
    // this.updatedAt = rememberMe.updatedAt.toISO()!
  }
}
