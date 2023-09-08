export interface AzayRequestToken {
  username: string,
  client_id: string,
  client_secret: string,
  password: string,
  grant_type: string,
  version?: string,
}