const { join } = require('path');
const { loadFilesSync, mergeTypeDefs, mergeResolvers } = require('graphql-tools');

const allTypes = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(join(__dirname,'modules','**','resolvers.js'));

const schema = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { schema, resolvers };
