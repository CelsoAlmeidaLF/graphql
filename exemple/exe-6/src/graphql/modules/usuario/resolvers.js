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
      return db.usuarios.find((db) => db.id == args.id );
    },
    usuarios: () => db.usuarios,
  },

  Mutation: {
    criarUsuario(_, args) {

      const { email } = args;

      const userExiste = db.usuarios.some(u => u.email == email)

      if(userExiste){
        throw new Error(`Usuario existente: ${args.nome}`);
      }

      const nUsuario = {
        ...args,
        id: geradorId(db.usuarios),
        perfil_id: 2,
      };

      db.usuarios.push(nUsuario);
      return nUsuario;
      }
  },

}
