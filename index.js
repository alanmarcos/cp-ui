const { version } = require('./package.json');
const Title = require('./src/public/Title');
const Button = require('./src/public/Button');

const CPUI = {
  version,
  Title,
  Button
}

console.log(CPUI);

module.exports = CPUI;