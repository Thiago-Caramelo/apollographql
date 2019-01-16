const { findTweet, findAllTweets } = require('./db')

module.exports = {
  Query: {
    tweet: (_, { id }) => findTweet(id),
    tweets: () => findAllTweets()
  },
  Mutation: {
    createTweet: () => undefined,
    deleteTweet: (id) => undefined
  }
}