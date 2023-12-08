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
  