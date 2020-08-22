const db = require("../../../db")

module.exports = {

  Usuario: {
    celular(o) {
      return o.cel;
    },
    perfil(o) {
      return db.perfis.find((db) => db.id == o.id);
    },
  },


  Query: {
    usuario(_, args){
      return db.usuarios.find((db) => db.id == args.id );
    },
    usuarios: () => db.usuarios,
  },
}
