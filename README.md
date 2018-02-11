Project Status: **Building**

##Install
* Node
* Git
* Heroku-cli

##Configurations

Create a `config` folder and put into it a file named `keys.js` with the content bellow.
```
module.exports = {
    GOOGLE_CLIENT_ID = "xxxxxxxx-m604m51aptqr72ej4o8gsgxxxxxxv5qrh.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET = "xxxxxx4RHZ9GDsxxxxxxx",
    mongoURI: "mongodb://<user>:<passwd>@<host>:25078/<collection>",
    cookieKey: 'xxxxxxxxWYESDD%#$¨xxxxxxxxx'
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


