const { typeDefs } = require('../graphql-utils/schema')
const { resolvers } = require('../graphql-utils/resolvers')
const { graphql } = require('graphql')

module.exports = async function(context, req) {
  const body = req.body
  try {
    const response = await graphql(
      typeDefs,
      body.query,
      resolvers,
      null,
      body.variables,
      body.operationName
    )
    context.res = {
      body: response,
    }
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`)
    context.res = {
      status: 500,
      body: { message: 'An error has occured, please try again later' },
    }
  }
}
