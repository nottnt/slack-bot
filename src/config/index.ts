const env = process.env.NODE_ENV || 'development'

interface ConfigData {
  [ key: string ]: any
}

const config: ConfigData = {
  development: {
    AZAY_GATEWAY_URL: 'https://5fa16dbd2541640016b6afff.mockapi.io/api/v1/',
    REQUEST_TOKEN_URL: 'https://5fa16dbd2541640016b6afff.mockapi.io/api/v1/token',
    DELETE_SIGN_AZD_URL: 'delete',
    TOKEN_POST_URL: process.env.TOKEN_POST_URL || 'https://appman.slack.com/files/T7R7K0UJZ/FMPC6TNCU?origin_team=T7R7K0UJZ',
  },
  production: {
    AZAY_GATEWAY_URL: 'localhost:3000',
    REQUEST_TOKEN_URL: 'localhost:3000/test',
    DELETE_SIGN_AZD_URL: 'delete',
    TOKEN_POST_URL: process.env.TOKEN_POST_URL,
  }
  
}

export default config[env as keyof ConfigData]