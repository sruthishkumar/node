const express = require('express');
const path = require('path');
const app = express();
const works = require('./data/works');

const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Helper middleware to mark active nav
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.year = new Date().getFullYear();
  next();
});

// Routes
app.get('/', (req, res) => res.render('index', { title: 'Home', page: 'home', works: works.slice(0,3) }));
app.get('/about', (req, res) => res.render('about', { title: 'About', page: 'about' }));
app.get('/works', (req, res) => res.render('works', { title: 'Works', page: 'works', works }));
app.get('/experience', (req, res) => res.render('experience', { title: 'Experience', page: 'experience' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact', page: 'contact' }));

app.get('/works/:slug', (req, res) => {
  const item = works.find(w => w.slug === req.params.slug);
  if (!item) return res.status(404).render('404', { title: 'Not Found' });
  res.render('work-detail', { title: item.title, page: 'works', item });
});

app.post('/contact', (req, res) => {
  // In real life you'd send email or store in DB
  const { name, email, message } = req.body;
  console.log('Contact message:', { name, email, message });
  res.render('thanks', { title: 'Thanks', page: 'contact', name });
});

// 404
app.use((req, res) => res.status(404).render('404', { title: 'Not Found' }));

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
