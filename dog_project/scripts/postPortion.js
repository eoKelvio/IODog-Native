  const API_URL = "https://eokelvio.pythonanywhere.com/feedTimes/"; // Substitua pela URL da sua API

  const sendToAPI = async (data) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha ao enviar dados para a API');
    }

    const responseData = await response.json();
    return responseData; // Pode personalizar o retorno conforme necessário
  } catch (error) {
    console.error(error);
    throw error;
  }
};

  export { sendToAPI };
