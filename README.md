# MyLocker
<img src="https://raw.githubusercontent.com/liamlows/CSE3345_MyLocker/master/MyLocker/src/assets/img/ml.png" width="40%" height="40%">

### Description
-------------
MyLocker is a website that pulls multiple products from multiple websites into one common location for easy access. This webpage eliminates the need to have multiple websites open when online shopping and allows users to view all of their favorite brands in one location. Products are able to be filtered by brand, color, price, gender and searched by item name. Registered users can also rate products and save their favorite products to their favorites list.

### Set Up
-------------
To set up the server your first need to install the angular CLI, bootstrap, popper.js, and jquery. You will also need to add the boostrap stylesheet and asocciated scripts to you angular.json.

#### Install Angular CLI
`$ npm install -g @angular/cli`
 + `-g` will install the CLI globally.

#### Install Bootstrap CSS
`$ npm install ngx-bootstrap bootstrap@4.1.1`
#### Install Popper.js
`$ npm install popper.js --save`
#### Install Jquery
`$ npm install jquery --save`

#### Style Sheet
In your angular.json file...

	"styles": [  
              "src/styles.css",  
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"  
            ],  
            "scripts": [              
              "./node_modules/jquery/dist/jquery.min.js",  
              "./node_modules/popper.js/dist/umd/popper.min.js",  
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"  
            ]   

#### package.json
Please note that currently the application runs off of the localhost IP (127.0.0.1) and default port (4200). Remember to change these in your package.json file if you run it on an actual server!

#### Run the server!
Once you have set all of the above up, navigate the main directory and run,

`$ ng serve -o`

which will start the serve and then open it on localhost in your browser.

### Notes
-------------
- This project used an API to access the MYSQL database that stored all user/product information. The current API information is specific to this project so you may have to slightly alter the 'api.service.ts' in 'app/models' to obtain a functional app.
