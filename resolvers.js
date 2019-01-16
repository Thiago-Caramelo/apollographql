module.exports = {
  Query: {
    tweet: (id) => {
      debugger
      return {
        id
      }
    },
    tweets: () => []
  },
  Mutation: {
    createTweet: () => undefined,
    deleteTweet: (id) => undefined
  }
}