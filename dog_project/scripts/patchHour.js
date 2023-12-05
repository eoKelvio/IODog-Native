const fetch = require("node-fetch");

export default async function pacthHour(id, newTime) {
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
}


