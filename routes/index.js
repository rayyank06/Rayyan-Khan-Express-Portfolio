// Routes for Portfolio Website
// This file defines all the routes (URLs) for our Express application

var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    body: '' 
  });
});

/* GET about page */
router.get('/about', function(req, res, next) {

  res.render('about', { 
    title: 'About Me'
  });
});


router.get('/projects', function(req, res, next) {
 
  res.render('projects', { 
    title: 'Projects'
  });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
 
  res.render('contact', { 
    title: 'Contact'
  });
});


router.post('/contact', function(req, res, next) {
  
  console.log('Form submitted:');
  console.log('Name:', req.body.name);
  console.log('Email:', req.body.email);
  console.log('Phone:', req.body.phone);
  console.log('Comments:', req.body.comments);
  

  res.redirect('/contact');
});

module.exports = router;