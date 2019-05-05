const resolvers = {
  hello: async obj => {
    return `Hello ${obj.name}`
  },
}

module.exports.resolvers = resolvers
