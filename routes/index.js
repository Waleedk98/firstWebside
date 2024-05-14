var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Webserver', name: 'Waleed Khaliq' });
  const { title, benutzername, date, text } = req.body;
  /*console.log (req.body);
  console.log('Titel:', title);
  console.log('Benutzername:', benutzername);
  console.log('Datum:', date);
  console.log('Text:', text); */
});

/* GET home page. */
router.post('/', function (req, res, next) {
  //res.render('index', { title: 'Webserver', name :'Waleed Khaliq' });
  const { title, benutzername, date, text } = req.body;
  console.log (req.body);
  console.log('Titel:', title);
  console.log('Benutzername:', benutzername);
  console.log('Datum:', date);
  console.log('Text:', text); 

  res.send("toll");
});

router.get('/secondPage', function (req, res, next) {
  res.render('secondPage', { title: 'Second Page', name: 'Waleed Khaliq' });
});

router.get('/person', function (req, res, next) {
  res.render('person', {});
});

router.get('/neuePerson', function (req, res, next) {
  const { name, vorname, wohnort, plz, strasse, hausnummer, email, bday } = req.query;
  console.log(req.query.person)
  console.log('Name:', name);
  console.log('Vorname:', vorname);
  console.log('Wohnort:', wohnort);
  console.log('Postleitzahl:', plz);
  console.log('Straße:', strasse);
  console.log('Hausnummer:', hausnummer);
  console.log('Email:', email);
  console.log('Geburtstag:', bday);

  //res.send ("Daten erhalten!");


  // Ausgabe des Geburtsdatums auf der Konsole
  //console.log('Geburtsdatum:', bday);

  // Konvertierung des Geburtsdatums in Sekunden seit dem 1.1.1970
  const birthTimestamp = new Date(bday).getTime() / 1000;
  console.log('Unix Timestamp Geburtsdatum:', birthTimestamp);

  // Konvertierung des aktuellen Datums in den Unix-Timestamp
  const currentTimestamp = Math.floor(Date.now() / 1000);
  console.log('Aktueller Unix Timestamp:', currentTimestamp);

  // Berechnung der Anzahl der Tage auf der Erde
  const daysOnEarth = Math.floor((currentTimestamp - birthTimestamp) / 86400);
  console.log('Anzahl der Tage auf der Erde:', daysOnEarth);

  // Senden der Anzahl der Tage an den Client
  res.send(daysOnEarth.toString() + " Tage");

});

router.get('/blogpost', function (req, res, next) {
  res.render('blogpost', {});
});
module.exports = router;
