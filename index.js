const express = require('express');
const port = process.env.PORT || 9090;
const hbs = require('hbs');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static('public'));
var person = {
       "studs" : {
              'name': "Rafael Maderazo",
              'id': "118",
              'bio': '"19-year old programmer studying in DLSU. Caffeinated 100% of the time."',
              'deg': 'BS Computer Science with specialization in Network Engineering'
       }
};

var acads = 
{
       
       "activities" : 
       [
              {
                     "org" : "COMET",
                     "pos" : "Perseid Cohort"
              },
              {
                     "org" : "UXSoc",
                     "pos" : "Partnerships Pool - Member"
              },
              {
                     "org" : "Computer Studies Government",
                     "pos" : "Externals Executive"
              },
              {
                     "org" : "Developh",
                     "pos" : "Core Member"
              },
              {
                     "org" : "Iboto.ph",
                     "pos" : "Project Manager"
              },
              {
                     "org" : "Developers Student Club - Taft",
                     "pos" : "External Relations Officer"
              }

       ]
       

};

app.get("/", function(req, res)
{
       res.render("homepage", {});
});

app.get("/profile", function(req, res)
{
       res.render("about", person["studs"]);
});


app.get("/activities", function(req, res)
{
       res.render("extras", acads);
});

app.listen(port, function()
{
    console.log('listening at port ' + port);
});
