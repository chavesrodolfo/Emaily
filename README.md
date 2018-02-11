Project Status: **Building**

##Install
* Node
* Git
* Heroku-cli

##Development

Create a `config` folder and put into it a file named `dev.js` with the content bellow.
```
module.exports = {
    googleClientID : "451072916731-m604m51aptqr72ej4o8gsg2karev5qrh.apps.googleusercontent.com",
    googleClientSecret : "eTqKtcH4RHZ9GDstmouJmclb",
    mongoURI: "mongodb://dodz:dodz123!@ds225078.mlab.com:25078/dodz-emaily-dev",
    cookieKey: 'MBM65433DHGCF79879JBJHMH'
};
```

##Run

Run in development mode
```
npm run dev
```

##Deploy

It is running in Heroku. Just commit and push to master configured there.

##Demo

[https://emaily-api.herokuapp.com](https://emaily-api.herokuapp.com/auth/google)


