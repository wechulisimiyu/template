import { BaseModelDto } from '@adocasts.com/dto/base'
import User from '#models/user'
import RoleDto from '#dtos/role'
import EmailVerificationDto from '#dtos/email_verification'
import EmailHistoryDto from '#dtos/email_history'
import PasswordResetTokenDto from '#dtos/password_reset_token'

export default class UserDto extends BaseModelDto {
  declare id: number
  declare roleId: number
  declare avatar_url: string | null
  declare fullName: string | null
  declare username: string
  declare email: string
  declare password: string
  declare providerId: string
  declare provider: string
  declare emailVerified: Boolean | null
  declare emailVerifiedAt: string | null
  declare createdAt: string
  declare updatedAt: string | null
  declare role: RoleDto | null
  declare emailVerification: EmailVerificationDto | null
  declare emailHistories: EmailHistoryDto[]
  declare passwordResetTokens: PasswordResetTokenDto[]

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.roleId = user.roleId
    this.avatar_url = user.avatar_url
    this.fullName = user.fullName
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.providerId = user.providerId
    this.provider = user.provider
    this.emailVerified = user.emailVerified
    this.emailVerifiedAt = user.emailVerifiedAt?.toISO()!
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt?.toISO()!
    this.role = user.role && new RoleDto(user.role)
    this.emailVerification =
      user.emailVerification && new EmailVerificationDto(user.emailVerification)
    this.emailHistories = EmailHistoryDto.fromArray(user.emailHistories)
    this.passwordResetTokens = PasswordResetTokenDto.fromArray(user.passwordResetTokens)
  }
}
