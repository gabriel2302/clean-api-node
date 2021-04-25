import { InvalidParamError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/htpp-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadSurveyById,
  SaveSurveyResult
} from './save-survey-result-controller.protocols'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // Pega os parâmetros, dados do body e id do usuário
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const { accountId } = httpRequest

      // Busca no banco um survey com o id do parâmetro
      const survey = await this.loadSurveyById.loadById(surveyId)

      // Trata o survey para ver se ele existe
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }

      // Se passar, ele pega os dados e salva
      const surveyResult = await this.saveSurveyResult.save({
        answer,
        date: new Date(),
        surveyId,
        accountId: String(accountId)
      })
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
