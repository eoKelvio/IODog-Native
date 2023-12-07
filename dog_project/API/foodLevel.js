export default async function getFoodLevel() {
  try {
    const response = await fetch("https://eokelvio.pythonanywhere.com/log/");
    if (!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }

    const data = await response.json();

    const foodLevelMaisRecente = maisRecente(data);

    if (foodLevelMaisRecente !== null) {
      console.log("Food Level do log mais recente:", foodLevelMaisRecente);
      return foodLevelMaisRecente;
    } else {
      console.log("Nenhum log encontrado");
      return null;
    }
  } catch (error) {
    console.error("Houve um problema com a requisição:", error);
    return null;
  }
}

function maisRecente(logs) {
  if (logs && logs.length > 0) {
    logs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const ultimoLog = logs[0];
    return ultimoLog.food_level;
  } else {
    return null;
  }
}
