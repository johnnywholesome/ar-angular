// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'sit',
  api: 'https://ficmapi-sit.cloud.usfood.com',
  apiVersion: 'v1',
  consumerId: 'FICM',
  SessionTimeout: {
    IdleTime: 3600, // Seconds
    WarningTime: 120, // Seconds
    RefreshTokenTime: 1200, // Seconds
  }
};

  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
