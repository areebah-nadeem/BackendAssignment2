
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
            'mongodb+srv://areebahnadeem91:Areebah91@cluster0.hnfrpih.mongodb.net/Marketplace?retryWrites=true&w=majority' ||
            process.env.MONGO_HOST ||
            'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/Marketplace',
  uri: '/api'
};

module.exports = config;
