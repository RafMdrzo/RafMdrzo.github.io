const express = require('express');
const port = 9090;
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
       "first" : 
       [
              {
                     "course": "CCPROG1",
                     "prof": "Ms. Shirley Chu"
              },
              {
                     "course": "BASMATH",
                     "prof": "Mr. Melvin Vidar"
              },
              {
                     "course": "BASSTAT",
                     "prof": "Mr. Karl Collado"
              },
              {
                     "course": "CCICOMP",
                     "prof": "Mr. Roger Uy"
              },
              {
                     "course": "GEPCOMM",
                     "prof": "Ms. Gene Flores"
              },
              {
                     "course": "CCPROG2",
                     "prof": "Mr. Arturo Caronongan"
              },
              {
                     "course": "CCDSTRU",
                     "prof": "Mr. Pauline Rivera"
              },
              {
                     "course": "CSMATH1",
                     "prof": "Mr. Edmundo Perez"
              },
              {
                     "course": "GEUSELF",
                     "prof": "Mr. Martin Esteves"
              },
              {
                     "course": "GEARTAP",
                     "prof": "Ms. Maysa Arabit"
              },
              {
                     "course": "GEMATMW",
                     "prof": "Ms. Diane Songsong"
              },
              {
                     "course": "CCPROG3",
                     "prof": "Ms. Nathalie Lim-Cheng"
              },
              {
                     "course": "CCDSALG",
                     "prof": "Ms. Teresita Limoanco"
              },
              {
                     "course": "GEFILI1",
                     "prof": "Ms. Myrna Torreliza"
              },
              {
                     "course": "GEFTWEL",
                     "prof": "Mr. Aguinaldo"
              }

       ],
       "second" : 
       [
              {
                     "course": "CSADPRG",
                     "prof": "Mr. ?"
              },
              {
                     "course": "CCINFOM",
                     "prof": "Mr. Oliver Malabanan"
              },
              {
                     "course": "CSNETWK",
                     "prof": "Mr. Gregory Cu"
              },
              {
                     "course": "GEFILI2",
                     "prof": "Mr. ?"
              },
              {
                     "course": "GEDANCE",
                     "prof": "Ms. Joanna"
              },
              {
                     "course": "CSALGCM",
                     "prof": "Ms. Austin Fernandez"
              },
              {
                     "course": "CCAPDEV",
                     "prof": "Mr. Arren Antioquia"
              },
              {
                     "course": "NSCOM01",
                     "prof": "Ms. Arlyn Ong"
              },
              {
                     "course": "NSSECU1",
                     "prof": "Mr. Katrina Solomon"
              },
              {
                     "course": "CSARCH1",
                     "prof": "Mr. Ronald Pascual"
              }

       ],
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
                     "pos" : "Externals Relations Officer"
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

app.get("/academics", function(req, res)
{
       res.render("academics", acads);
});

app.get("/activities", function(req, res)
{
       res.render("extras", acads);
});

app.listen(port, function()
{
    console.log('listening at port ' + port);
});
