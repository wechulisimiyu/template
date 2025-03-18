import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbRememberMeTokensProvider } from '@adonisjs/auth/session'
import EmailHistory from '#models/email_history'
import Role from '#models/role'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import PasswordResetToken from './password_reset_token.js'
import EmailVerification from './email_verification.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(User)
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roleId: number

  @column()
  declare avatar_url: string | null

  @column()
  declare fullName: string | null

  @column()
  declare username: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare providerId: string

  @column()
  declare provider: string

  @column()
  declare emailVerified: Boolean | null

  @column.dateTime()
  declare emailVerifiedAt: DateTime | null

  // @column.dateTime()
  // declare last_login: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @hasOne(() => EmailVerification)
  declare emailVerification: HasOne<typeof EmailVerification>

  @hasMany(() => EmailHistory)
  declare emailHistories: HasMany<typeof EmailHistory>

  @hasMany(() => PasswordResetToken)
  declare passwordResetTokens: HasMany<typeof PasswordResetToken>
}
