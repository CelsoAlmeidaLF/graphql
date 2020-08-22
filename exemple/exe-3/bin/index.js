
const {gql, ApolloServer } = require('apollo-server')

// banco de dados
const db = [
  {
    id: 1,
    nome: "Celso de Almeida L. F.",
    email: "celso.almeida.leite@hotmail.com",
    cel: "95447-2505",
    perfil: 1
  },
  {
    id: 2,
    nome: "Natalia Clementes",
    email: "nathi_1290@hotmail.com",
    cel: "95447-2544",
    perfil: 2
  },
]

const perfis = [
  {id: 1, descricao: "ADMIN" },
  {id: 2, descricao: "USER" }
]

// graphql schema
const schema = gql`
  type Usuario {
      id: Int
      nome: String
      email: String
      celular: String
      perfil: Perfil
  }

  type Perfil {
    id: Int
    descricao: String
  }

  type Query {
    usuario(id: Int): Usuario
    perfis: [Perfil]
  }
`;

// propriedades resolvers
const resolvers = {
  Usuario: {
    celular(obj) {
      return obj.cel;
    },
    perfil(obj) {
      return perfis.find((p) => p.id == obj.perfil);
    }
  },

  Query: {
    usuario(_, args){
      return db.find((db) => db.id == args.id );
    },
    perfis(){
      return perfis;
    }
  },
};

// server
const server = new ApolloServer ({
  typeDefs: schema, resolvers });
server.listen();
