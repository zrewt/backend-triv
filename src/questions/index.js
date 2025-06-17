const soccerQuestions = require('./soccer');
const footballQuestions = require('./football');
const basketballQuestions = require('./basketball');
const baseballQuestions = require('./baseball');
const hockeyQuestions = require('./hockey');

const allQuestions = [
  ...soccerQuestions,
  ...footballQuestions,
  ...basketballQuestions,
  ...baseballQuestions,
  ...hockeyQuestions
];

module.exports = allQuestions; 