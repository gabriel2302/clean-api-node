import { loginPath, surveyPath, signUpPath } from './paths'
import { badRequest, notFound, serverError, unauthorized, forbidden } from './components'
import {
  apiKeyAuthSchema,
  accountSchema,
  errorSchema,
  loginParamsSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  signUpParamsSchema
} from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  licence: {
    name: 'ISC',
    url: 'https://opensource.org/licenses/ISC'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [
    {
      name: 'Login'
    },
    {
      name: 'Enquetes'
    }
  ],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath,
    '/signUp': signUpPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    signUpParams: signUpParamsSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }
}
