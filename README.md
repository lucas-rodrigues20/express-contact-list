# Express Contacts App

This is a simple Express.js application to practice some skills.

This application was built inspired by [this tutorial](https://www.youtube.com/watch?v=G8uL0lFFoN0).

## How to run

* Create a Mysql database named `express_contacts` or;
* Update the files `config.js` and `config.json` setting the `database` field with your own database;
* Make sure to update the `password` field with your database password on these files to.
* Run `npm install` to download the dependencies;
* In order to run the migrations you need to have installed `sequelize-cli`, you can install it running `npm install -g sequelize-cli`;
* Run `sequelize db:migrate` to generate the tables;
* Finally you can run the application with `npm start` or you can use nodemon to automatically restart it for you at any changes with `npm run devstart`. 