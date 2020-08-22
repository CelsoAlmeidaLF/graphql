const {gql, ApolloServer } = require('apollo-server')

// lista de produtos
const produtos = [
  {
    id: 1
    ,nome: 'notebook Dell'
    ,valor: 3600.00
  },
  {
    id: 2
    ,nome: 'notebook Acer'
    ,valor: 2600.00
  }

]

// lista de usuarios
const usuarios = [
  {
    id: 1234567
    ,idade: 31
    ,nome: 'Celso de Almeida L. F.'
    ,salario: 2350.24
    ,ativo: true
  }
]

// graphql schema
const schema = gql`

  type Produto {
    id: ID
    nome: String
    valor: Float
  }

  type Usuario {
    id: ID
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
  }

  type Query {
    usuarios: [Usuario]
    produtos: [Produto]
    produto(id: Int, nome: String): Produto
  }`;

// resolver
const resolvers = {
  Query: {
    produto(_, args){
      const { id, nome } = args;
      if(id) return produtos.find((produto) => produto.id == id );
      return produtos.find((produto) => produto.nome == nome);
    },
    produtos() {
      return produtos;
    },
    usuarios() {
      return usuarios;
    }
  }
};

// server
const server = new ApolloServer({ typeDefs: schema, resolvers });
server.listen();
