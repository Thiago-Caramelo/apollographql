// Provide resolver functions for your schema fields
module.exports = {
  Query: {
    tweet: () => 0,
    tweets: () => []
  },
  Mutation: {
    createTweet: () => undefined,
    deleteTweet: (id) => undefined
  }
}