const { findTweet, findAllTweets, createTweet, deleteTweet } = require('./db')

module.exports = {
  Query: {
    tweet: (_, { id }) => findTweet(id),
    tweets: () => findAllTweets()
  },
  Mutation: {
    createTweet: (_, { body }) => createTweet(body),
    deleteTweet: (_, { id }) => deleteTweet(id),
  }
}