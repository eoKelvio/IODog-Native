const API_URL = "https://eokelvio.pythonanywhere.com/feedTimes/1/"; // Substitua pela URL da sua API

export async function sendToAPI(newPortionValue) {
  const portionNumber = Number(newPortionValue); // Converter o valor recebido para número

  if (isNaN(portionNumber)) {
    throw new Error("O valor fornecido não é um número válido.");
  }

  try {
    // Obter os dados atuais da API
    const response = await fetch(API_URL);
    const data = await response.json();

    // Atualizar o valor da porção com o novo valor convertido
    data.portion = portionNumber;

    // Enviar os dados atualizados para a API
    const updateResponse = await fetch(API_URL, {
      method: "PUT", // Use PUT para atualizar os dados
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!updateResponse.ok) {
      throw new Error("Falha ao enviar dados atualizados para a API");
    }

    const responseData = await updateResponse.json();
    return responseData; // Pode personalizar o retorno conforme necessário
  } catch (error) {
    console.error(error);
    throw error;
  }
}
