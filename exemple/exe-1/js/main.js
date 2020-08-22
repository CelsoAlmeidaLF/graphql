const consulta = '{ olaMundo }'

const opcoes = {
  method: 'POST',
  headers: { 'Content-Type': 'application/JSON' },
  body: JSON.stringify({
    query: consulta
  })
}

const hello = (string) => {
  const body = document.querySelector('body')
  body.innerHTML = string
}

fetch('http://localhost:4000/graphql', opcoes)
  .then(resposta => resposta.json())
  .then(dados => hello(dados.data.olaMundo))
