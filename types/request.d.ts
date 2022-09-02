export interface Request {
  method: 'POST' | 'GET'
  headers: { 'Content-Type': 'application/json' }
  body: string
}
