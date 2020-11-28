// References: https://hasura.io/learn/graphql/typescript-react-apollo/codegen/

require('dotenv').config()

module.exports = {
  overwrite: true,
  schema: process.env.SCHEMA_PATH,
  documents: ['src/mutations/*.graphql', 'src/queries/*.graphql'],
  generates: {
    'generated/client.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    // NOTE: At this stage, it is only to be requested by the client to Hasura
    // 'generated/server.tsx': {
    //   plugins: ['typescript', 'typescript-resolvers'],
    // },
    'generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}