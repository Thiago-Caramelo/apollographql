const { findTweet, findAllTweets, createTweet } = require('./db')

module.exports = {
  Query: {
    tweet: (_, { id }) => findTweet(id),
    tweets: () => findAllTweets()
  },
  Mutation: {
    createTweet: (_, { body }) => createTweet(body),
    deleteTweet: (_, { id }) => undefined
  }
}