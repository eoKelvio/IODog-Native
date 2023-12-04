export default async function fetchHours(setHours, setError) {
    try {
      const response = await fetch("https://eokelvio.pythonanywhere.com/hours/");
  
      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json)) {
          const extractedHours = json.map((item) => ({
            id: item.id,
            times: item.times
          }));
          
          setHours(extractedHours);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  