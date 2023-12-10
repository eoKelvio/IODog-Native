export async function postLevel(foodLiberation, portions, foodLevel) {
    const link = `https://eokelvio.pythonanywhere.com/log/`;
    try {
      const data = {
        food_liberation: foodLiberation,
        portions: portions,
        food_level: foodLevel,
      };
  
      const response = await fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const attLevel = await response.json();
        console.log("Nível Atualizado:", attLevel);
      } else {
        console.error("Erro ao atualizar o Nível:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }


  const API_URL = "https://eokelvio.pythonanywhere.com/log/";
  
  export async function postFoodLevelAndPortion(foodLevel, portion) {
    const foodLevelNumber = Number(foodLevel);
    const portionNumber = Number(portion);
  
    if (isNaN(foodLevelNumber) || isNaN(portionNumber)) {
      throw new Error("Os valores fornecidos não são números válidos.");
    }
  
    try {
      // Obter os dados atuais da API
      const response = await fetch(API_URL);
      const data = await response.json();
  
      // Atualizar os valores com os novos valores convertidos
      data.food_level = foodLevelNumber;
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
  