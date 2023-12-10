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

    try {
      const response = await fetch(API_URL, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_level: foodLevelNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar dados para a API");
      }

      const responseData = await response.json();
      return responseData; // Pode personalizar o retorno conforme necessário
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  