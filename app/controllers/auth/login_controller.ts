import WebLogin from '#actions/auth/http/web_login'
import { SESSION_KEYS } from '#constants/session'
import { loginValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
// import { returnToKey } from '#middleware/auth_middleware'

export default class LoginController {
  @inject()
  async show({ inertia, logger }: HttpContext) {
    const requestId = crypto.randomUUID()
    logger.info({ requestId, action: 'login.page.view' }, 'Displaying login page')
    return inertia.render('auth/login')
  }

  @inject()
  async store({ request, response, session, logger }: HttpContext, webLogin: WebLogin) {
    const requestId = crypto.randomUUID()
    try {
      const data = await request.validateUsing(loginValidator)
      await webLogin.handle({ data })

      logger.info(
        {
          requestId,
          action: 'login.session',
          sessionData: session.all(),
        },
        'Session state before redirect'
      )

      const returnTo = session.pull(SESSION_KEYS.RETURN_TO, '/')

      logger.info(
        {
          requestId,
          action: 'login.redirect',
          returnTo,
          email: data.email,
        },
        'Processing login redirect'
      )

      await session.regenerate()
      session.flash('success', 'Welcome back')

      return response.redirect().toPath(returnTo)
    } catch (error) {
      logger.error(
        {
          requestId,
          action: 'login.error',
          err: error,
        },
        'Login failed'
      )
      throw error
    }
  }
}
