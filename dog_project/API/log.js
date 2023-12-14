export async function newFoodLevel() {
  try {
    const respostaLog = await fetch('https://eokelvio.pythonanywhere.com/log/');
    const dadosLog = await respostaLog.json();
    
    if (!dadosLog || dadosLog.length === 0) {
      console.log('Nenhum log disponível.');
      return;
    }

    const logMaisRecente = dadosLog[dadosLog.length - 1];
    
    const url = 'https://eokelvio.pythonanywhere.com/log/';
    const dadosParaEnviar = {
      "food_liberation": false, // Substitua pelo valor desejado para food_liberation
      "portions": logMaisRecente.portions,
      "food_level": "100" // Substitua pelo valor desejado para food_level
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosParaEnviar)
    };

    const respostaEnvio = await fetch(url, options);
    const respostaJson = await respostaEnvio.json();
    console.log('Resposta do servidor:', respostaJson);
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

// Chama a função para obter o log e enviar os dados
newFoodLevel();
