export async function fetchHours(setHours) {
  try {
    const response = await fetch("https://eokelvio.pythonanywhere.com/hours/");

    if (response.ok) {
      const json = await response.json();
      if (Array.isArray(json)) {
        // Esta linha mapeia os horários de cada item no JSON
        const extractedHours = json.map((item) => ({
          id: item.id,
          times: item.times,
        }));

        // Esta linha retorna os horários, se desejar retorná-los
        return extractedHours;
      }
    }
  } catch (error) {
    // Trate qualquer erro que possa ocorrer durante o fetch ou processamento
    console.error("Ocorreu um erro ao buscar os horários:", error);
  }
  // Se algo der errado ou não houver dados, retorna-se null ou um valor vazio, dependendo do caso
  return [];
}

const fetch = require("node-fetch");

export async function patchHour(id, newTime) {
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

export async function deleteHour(id) {
  const link = `https://eokelvio.pythonanywhere.com/hours/${id}/`;
  try {
    const response = await fetch(link, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Horário deletado");
    } else {
      console.error("Erro ao deletar o horário:", response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
