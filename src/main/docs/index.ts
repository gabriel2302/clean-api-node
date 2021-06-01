import { loginPath, surveyPath, signUpPath, surveyResultPath } from './paths'
import { badRequest, notFound, serverError, unauthorized, forbidden } from './components'
import {
  apiKeyAuthSchema,
  accountSchema,
  errorSchema,
  loginParamsSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  surveyResultSchema,
  signUpParamsSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema
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
    '/signUp': signUpPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    saveSurveyParams: saveSurveyParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    surveyResult: surveyResultSchema
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
