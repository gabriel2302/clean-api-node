export class EmailInUseError extends Error {
  constructor () {
    super('Access denied')
    this.name = 'AccessDeniedError'
  }
}
