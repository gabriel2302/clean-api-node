import { Controller, HttpRequest, HttpResponse, LoadSurveys } from './load-surveys-controller-protocols'
import { noContent, ok, serverError } from '@/presentation/helpers/http/htpp-helper'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
