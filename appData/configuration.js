// config.js
const config = {
    port: process.env.PORT || 3000,
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 27017,
      name: process.env.DB_NAME || 'my_app_db',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectionstr: 'mongodb+srv://SruthishKumar:GreatThingsToMe@40-25@cluster0.6xbfqvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    },
    apiKeys: {
      googleMaps: process.env.GOOGLE_MAPS_API_KEY,
      stripe: process.env.STRIPE_API_KEY,
    },
    environment: process.env.NODE_ENV || 'development',
  };
  
  module.exports = config;
  