const express = require('express');
const hbs     = require('hbs');
const login = require('./routes/service.js');
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear",()=>{
    return new Date().getFullYear();
})
var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public-test'));
/* app.use((req,res,next)=>{
    res.render('middleware.hbs',{
        'pageDate': {
            title: 'Middle ware Page',
            body: 'I am Middel ware Page'
        }, 
    })
    //next();
}) */

app.get('/',(request,response)=>{
    response.render('home.hbs',{
        'pageData': {
            title: 'Home Page',
            body: 'I am Home Page'
        },
        
    })
    
});

app.get("/about",(req,res)=>{
    //res.render(__dirname+'/about/about-test.hbs',{
    res.render('about.hbs',{
        'pageDate': {
            title: 'About Page',
            body: 'I am About Page'
        },
        
    })
    
});
/* app.get("/getUser",(req,res)=>{
  var userData =  login.getUser(1);
  res.send(userData);
}) */
app.get('/bad',(req,res)=>{
    res.send({
        result: 'error',
        type: 404,
        desc: 'Resorce not found'
    })
})
app.listen(3000,()=>{
console.log('Server is running on 3000 port');
})