import { HttpRequest, HttpResponse, Controller, AddAccount, Validation, Authentication } from './signup-controller-protocols'
import { badRequest, serverError, ok, forbidden } from '../../../helpers/http/htpp-helper'
import { EmailInUseError } from '../../../errors'
export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, password, email } = httpRequest.body
      const isValid = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      const accessToken = await this.authentication.auth({ email, password })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
