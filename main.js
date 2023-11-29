// 1. Em primeiro lugar, definimos as contantes vão manipular os elementos HTML em seus respectivos IDs
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")

// 2. Aqui, criamos uma lista de respostas que desejamos exibir após a execução da função pergunta.
const respostas = [
  'Com certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// 3. Iniciamos a construção de nossa função principal.
function fazerPergunta() {
 
// 3.1. Definimos uma condição para retornar um alerta caso a função fazerPergunta seja executada sem que o usuário digite um valor no devido campo.
if(inputPergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

// 3.2 Criamos uma constante para exibir a pergunta realizada pelo usuário respeitando as propriedade da tag div de id container trabalhada em nosso arquivo CSS.
const pergunta = "<div>"  + inputPergunta.value + "</div>"

// 3.3 Criamos uma constante que recebe como tamanho a quantidade de respostas presentes dentro da lista "const respostas".
const totalRespostas = respostas.length

// 3.4 Criamos uma função em forma de constante para de forma aleatória, escolher uma das respostas presentes na lista de acordo com o seu tamanho.
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)



// 4. Com o auxílio da propriedade innerHTML, exibimos de maneira evidenciada para o usuário (dentro do HTML) a pergunta realizada pelo mesmo juntamente com uma resposta selecionada de forma aleatória.
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

 // 5. Combinamos algumas ideias de CSS dentro do próprio script para executar um efeito de transição com a finalidade de estilização.
elementoResposta.style.opacity = 1;
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  }, 7000)

}

//
