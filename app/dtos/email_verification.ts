import { BaseModelDto } from '@adocasts.com/dto/base'
import EmailVerification from '#models/email_verification'
import UserDto from '#dtos/user'

export default class EmailVerificationDto extends BaseModelDto {
  declare id: number
  declare userId: number
  declare token: string
  declare expiresAt: string
  declare user: UserDto | null

  constructor(emailVerification?: EmailVerification) {
    super()

    if (!emailVerification) return
    this.id = emailVerification.id
    this.userId = emailVerification.userId
    this.token = emailVerification.token
    this.expiresAt = emailVerification.expiresAt.toISO()!
    this.user = emailVerification.user && new UserDto(emailVerification.user)
  }
}
