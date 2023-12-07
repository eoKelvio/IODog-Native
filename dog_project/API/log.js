export async function postHour(foodLiberation, portions, foodLevel) {
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
        const createHours = await response.json();
        console.log("Horário criado:", createHours);
      } else {
        console.error("Erro ao criar o horário:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }
  