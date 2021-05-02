export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'API para autenticar usuários',
    requestBody: {
      content: {
        'aplication/json': {
          schema: {
            $ref: '#/schemas/loginParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'aplication/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      }
    }
  }
}
