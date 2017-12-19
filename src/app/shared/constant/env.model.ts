/**
 * Only valid JSON data types can be used for types
 *
 * Make sure the keys in `env.model.ts` exist in `env.json`
 * otherwise it'll throw message like this
 * Property '<missing-key>' is missing in type '{}'
 *
 */

export const AppEnv = {
  ENV: {
    DEV_MODE: false,
      PROTOCOL: 'http',
      DOMAIN:'localhost',
      BASE_URL  : '',
      API_VERSION  : '',
      UPLOAD_BASE  : '',
  }
}
