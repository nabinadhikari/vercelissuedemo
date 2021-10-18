import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '4f678830-3faa-4c80-bfe7-733d1d61bcd9',
    clientToken: 'pub62984cb465c306b4cf4a1e10e9582ebc',
    site: 'datadoghq.com',
    service: 'vercel-issuep-app',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});

datadogRum.startSessionReplayRecording();
console.log('data dog started');