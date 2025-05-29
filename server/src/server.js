const app = require('./app');
const { port } = require('../config/env');
const { connect } = require('../config/database');

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});