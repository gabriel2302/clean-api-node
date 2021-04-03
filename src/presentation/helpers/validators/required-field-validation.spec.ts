import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './compare-fields-validation'

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' }) // não foi passado a propriedade field
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ field: 'any_field' }) // não foi passado a propriedade field
    expect(error).toBeFalsy()
  })
})
