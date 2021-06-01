import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'
import {
  badRequest,
  notFound,
  serverError,
  unauthorized,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
}
