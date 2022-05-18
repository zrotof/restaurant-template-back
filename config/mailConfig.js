const { mailgunApiKey, mailgunDomain } = require('./dotEnvConfig');


const mailgunAuth = {
    auth: {
      api_key: mailgunApiKey,
      domain: mailgunDomain
    }
  };

module.exports = mailgunAuth;