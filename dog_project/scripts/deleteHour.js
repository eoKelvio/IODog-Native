export default async function deleteHour(id) {
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
  