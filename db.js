const _ = require('lodash')

const tweets = {
  '1c1efa8d-71fe-44d3-93ad-981720e21898': { id: '1c1efa8d-71fe-44d3-93ad-981720e21898', body: 'First tweet' },
  '97d9cfb7-c303-40db-8744-63712c074086': { id: '97d9cfb7-c303-40db-8744-63712c074086', body: 'Second tweet' },
}

const findTweet = (id) => {
  return tweets[id]
}

const findAllTweets = () => {
  return _.values(tweets)
}

module.exports = {
  findTweet,
  findAllTweets,
}