const API_URL = "https://eokelvio.pythonanywhere.com/feedTimes/1/"; // Substitua pela URL da sua API

const getNumberFromAPI = async () => {
  try {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      throw new Error("Falha ao obter número da API");
    }

    const data = await response.json();

    return data.portion;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getNumberFromAPI };
