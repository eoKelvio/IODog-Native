export default async function fetchLogs(setLogs) {
  // Função para formatar a data e hora
  function formatarDataHora(dataHoraString) {
    const dataHora = new Date(dataHoraString);

    // Formatação da data (DD-MM-AAAA)
    const dia = String(dataHora.getDate()).padStart(2, '0');
    const mes = String(dataHora.getMonth() + 1).padStart(2, '0');

    // Formatação da hora (HH:MM:SS)
    const hora = String(dataHora.getHours()).padStart(2, '0');
    const minuto = String(dataHora.getMinutes()).padStart(2, '0');

    // Retorna a data e hora formatadas
    return `${hora}:${minuto} - ${dia}/${mes}`;
  }

  try {
    const response = await fetch("https://eokelvio.pythonanywhere.com/log/");

    if (response.ok) {
      const json = await response.json();
      if (Array.isArray(json)) {
        const extractedLogs = json.map((item) => ({
          id: item.id,
          food_liberation: item.food_liberation,
          portions: item.portions,
          food_level: item.food_level,
          created_at: formatarDataHora(item.created_at),
        }));
        
        setLogs(extractedLogs);
      }
    }
  } catch (error) {
    console.error("Erro ao buscar e formatar os dados:", error);
  }
};
