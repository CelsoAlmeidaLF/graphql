const db = require("../../../db")

function geradorId(list) {
  let i;
  let l = list[list.length -1];
  if(!l){ i = 0; }
  else { i = l.id; }
  return ++i;
}

module.exports = {

  Usuario: {
    perfil(usuario) {
      return db.perfis.find((db) => db.id == usuario.perfil_id);
    },
  },

  Query: {
    usuario(_, args){
      return db.usuarios.find((db) => db.id == data.id );
    },
    usuarios: () => db.usuarios,
  },

  Mutation: {
    criarUsuario(_,{ data }) {

      const { email } = data;

      const userExiste = db.usuarios.some(u => u.email == email)

      if(userExiste){
        throw new Error(`Usuario existente: ${data.nome}`);
      }

      const nUsuario = {
        ...data,
        id: geradorId(db.usuarios),
        perfil_id: 2,
      };

      db.usuarios.push(nUsuario);
      return nUsuario;
    },

    atualizarUsuario(_, { id, data }){
      const usuario = db.usuarios.find(u => u.id == id)
      const index =  db.usuarios.findIndex(u => u.id == id)

      const nUsuario = {
        ...usuario,
        ...data
      }

      db.usuarios.splice(index, 1, nUsuario)
      return nUsuario
    },

    deletarUsuario(_, { filtro: { id, email } }){
      if(id){
        return deletarUsuarioFiltro( id ? { id } : { email } );
      } else{
        return deletarUsuarioFiltro( id ? { id } : { email } );
      }
    }
  },

}

function deletarUsuarioFiltro(filtro) {

  const chave = Object.keys(filtro)[0]
  const valor = Object.values(filtro)[0]

  const usuarioEnc = db.usuarios.find( u => u[chave] == valor )
  db.usuarios = db.usuarios.filter( u => u[chave] != valor )
  return !!usuarioEnc;
}
