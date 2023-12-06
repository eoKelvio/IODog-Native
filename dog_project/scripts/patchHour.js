const fetch = require("node-fetch");

export default async function patchHour(id, newTime) {
  if (id) {
    const link = `https://eokelvio.pythonanywhere.com/hours/${id}/`;
    try {
      const response = await fetch(link, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ times: newTime }),
      });

      if (response.ok) {
        const updatedHours = await response.json();
        console.log("Horário atualizado:", updatedHours);
      } else {
        console.error("Erro ao atualizar o horário:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    // Se nenhum id for fornecido, chama postHour com newTime
    await postHour(newTime);
  }
}

async function postHour(newTime) {
  const link = `https://eokelvio.pythonanywhere.com/hours/`;
  try {
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ times: newTime }), // Alterando para newTime
    });

    if (response.ok) {
      const updatedHours = await response.json();
      console.log("Horário criado:", updatedHours);
    } else {
      console.error("Erro ao criar o horário:", response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}



