const app = require('./app');
const { port } = require('../config/env');
const { connect } = require('../config/database');
const {clientMQTT} = require('./mqtt')
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    clientMQTT.on('connect',()=>{
      console.log('Connected');
    })
  });
});