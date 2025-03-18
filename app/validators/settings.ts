import vine from '@vinejs/vine'
import { emailRule } from './auth.js'

export const updateEmailValidator = vine.compile(
  vine.object({
    email: emailRule().unique(async (db, value) => {
      const match = await db.from('users').where('email', value).select('id').first()
      return !match
    }),
    password: vine.string(),
  })
)

export const updateProfileValidator = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(254).optional().nullable(),
  })
)
