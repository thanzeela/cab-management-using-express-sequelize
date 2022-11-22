const fs = require('fs');
const Handlebars = require('handlebars');

const express = require('express');
const path = require('path');

const {Sequelize} = require('sequelize');
const sequelize = new Sequelize("cabservicemanagement", "root", "Thanzi@2001",{
    host: "localhost",
    dialect: "mysql"
});

const app = express();

registerPartials();

app.use('/static',express.static(path.join(__dirname, 'static')));

app.get('/register', (req,res)=>{
    let t = renderTemplate('register', {});
    res.send(t);
});

app.get('/home', (req,res)=>{
    let t = renderTemplate('home', {});
    res.send(t);
});
app.get('/login', (req,res)=>{
    let t = renderTemplate('login', {});
    res.send(t);
});


app.listen(3000)

function renderTemplate(name,data){
    var filePath = path.join(__dirname, "templates", name+".hbs");
    let templateText = fs.readFileSync(filePath, 'utf8');
    let template = Handlebars.compile(templateText);
    return template(data);
}

function registerPartials(){
    var filePath = path.join(__dirname, "templates", "partials", "navbar.hbs");
    let templateText = fs.readFileSync(filePath, "utf8");
    Handlebars.registerPartial("navbar", templateText);
}

