export const serverError = {
  description: 'Erro de servidor',
  content: {
    'aplication/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
