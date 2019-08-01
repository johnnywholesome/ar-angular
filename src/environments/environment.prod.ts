export const environment = {
  production: true,
  envName: 'prod',
  api: 'https://ficmapi.cloud.usfood.com',
  apiVersion: 'v1',
  consumerId: 'FICM',
  SessionTimeout: {
    IdleTime: 3600, // Seconds
    WarningTime: 120, // Seconds
    RefreshTokenTime: 1200, // Seconds
  }
};
