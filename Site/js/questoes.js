

function ResponderQ() {
    var resultado = document.getElementById('pontuacao');
    let pontuacao = 0;
    var respostas = document.querySelectorAll('#respostas');
  const respostasCorretas = {
    'answer1': 'q1a',
    'answer2': 'q3b',
    'answer3': 'q4a',
    'answer4': 'q5b',
    'answer5': 'q6a',
    'answer6': 'q7b'
  };
    const respostasCorretasCompletar = {
      'resposta1': 'opened',
      'resposta2': 'fueled',
      'resposta3': 'marked',
      'resposta4': 'was',
      'resposta5': 'became',
      'resposta6': 'has been',
      'resposta7': 'cleaned',
      'resposta8': 'opened',
      'resposta9': 'wanted',
    };
    let divisor = 3;

  for (const [questao, respostaCorreta] of Object.entries(respostasCorretas)) {

    const opcoes = document.querySelectorAll(`input[name="${questao}"]`);

    opcoes.forEach((inputRadio) => {
      const opcao = inputRadio.nextElementSibling;
      

      if (inputRadio.checked) {
    
        const idOpcao = opcao.id;

        if (idOpcao === respostaCorreta) {
   
          opcao.style.backgroundColor = 'green';
          pontuacao += 1;
        } else {

          opcao.style.backgroundColor = 'red';
        }
      }
    });
  }
  resultado.style.display = 'flex';
  let pontuacaoInter = 0;
    for (const [questao, respostaCorreta] of Object.entries(respostasCorretasCompletar)) {

      const respostaUsuario = document.getElementById(questao).value.trim().toLowerCase();

      if (respostaUsuario === respostaCorreta) {
        pontuacaoInter += 1; 
        document.getElementById(questao).style.color = 'green';
      } else {
        document.getElementById(questao).style.color = 'red';
      }
    }
    pontuacao += pontuacaoInter / divisor;
    pontuacao = pontuacao.toFixed(pontuacao,2);
    document.getElementById('valorPontuacao').innerText = pontuacao;
    if(pontuacao<6){
        resultado.style.color = "red";
    } else {
        resultado.style.color = 'green';
    }
    for(i=0; i<= respostas.length;i++){
      respostas[i].style.display = "flex";
    }
    
  }
  