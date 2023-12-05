export default async function fetchLogs(setLogs) {
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
            created_at: item.created_at,
          }));
          
          setLogs(extractedLogs);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  