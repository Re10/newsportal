var config = {
    port : 4000,
    site : 'http://localhost/#/',
    // Database credentials

    mongo: {
        hostname: 'localhost',
        port: '27017',
        db: 'newsdb'
    },
};

config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;
 module.exports = config;