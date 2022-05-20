import * as crypto from 'crypto'


export async function generateToken() {
  return crypto.randomBytes(64).toString('hex')
}