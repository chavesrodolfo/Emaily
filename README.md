#Configurations

Create a `config` folder and put into it a file named `keys.js` with the content bellow.
```
module.exports = {
    GOOGLE_CLIENT_ID = "xxxxxxxx-m604m51aptqr72ej4o8gsgxxxxxxv5qrh.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET = "xxxxxx4RHZ9GDsxxxxxxx",
    mongoURI: "mongodb://<user>:<passwd>@<host>:25078/<collection>"
};
```

#Run

Run in development mode
```
npm run dev
```

#Deploy

Just commit and push to master.