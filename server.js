const express = require('express');
const hbs     = require('hbs');
//const login = require('./routes/service.js');
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear",()=>{
    return new Date().getFullYear();
})
var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public-test'));

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

app.get("/project",(req,res)=>{
    res.render('project.hbs',{
        pageDate : {
            title: 'Project page',
            body: 'I am body of project page'
        }
    })
})
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
app.listen(port,()=>{
console.log(`Server is running on ${port} port`);
})