
const webpush = require('web-push');

 const Subscription ={"endpoint":"https://fcm.googleapis.com/fcm/send/do7_XURp86s:APA91bFFTs2zJfEMY3d0jIi_epjWlkGCAqVuH5wVOqLFgrCuzrMy9i7Rq6yLiazF8PuZRTAHo8bUZ0rTdsFQz0DJuLwXiWM6rzkp3c_436GaON9o2gLnlSGDOqSP95DkH8hb-VNGoBsS",expirationTime:null,keys:{p256dh:"BMpl9nOSRsGqNlomV5DILWln14NWlnjrRf-tFeC9N1sIQthluQ69mMT6hSTb1Ec3aoAtJpwblX_WkXSdxtJ9ces",auth:"LxjYFVvhBpyuxk6f1p0Lpg"}};

 const vapidPublicKey = 'BD3WQKELi67IjW_meR5VEj_knDM6vgFbvZZx5szLCn2iJ-kDK11etypZ_I22WNhGvJNh3Z67L4j8R9gApbhmeAc';
 const vapidPrivateKey = 'Y1eqjHzkxAUcmtb1axkwpZpwOTFhmdcgHTntofNBywU';


// webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:abc@gmail.com',
  vapidPublicKey,
  vapidPrivateKey
);


//This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/eZTxqcFMZ_0:APA91bH0rF6a01AmO28UcWQDPJEuWVCU-uY6jfIy9H-MK80J_zjb2FubzN1wb44hLRSi8eVHZd0ms54LUc-dUBEpxC9-lGWw1Aa-DzXSJthwWSiCx7Q4il7XVK4sHWnwI_SefAEjZmEx",
  keys: {
    auth: "xJStyNRL9wIbulAj6deM4Q",
    p256dh: "BMJv_1n1myrJOp9wHYiy7x6vHEj12YbIinFshi8kteyGMJGKZ8CYUMSOlx4e6vQc7_Smo4_BL1Snyb6edhuFmcE"
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');