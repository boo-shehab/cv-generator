const fetchData = async (url, options = {}) => {
    try {
        const defaultOptions = {
            headers: {
            "Content-Type": "application/json",
            ...options.headers,
            },
        };
  
        const response = await fetch("http://16.170.247.41:80/api/web/v1/"+url, { ...defaultOptions, ...options });
  
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.message || `HTTP error! status: ${response.status}`);
        }
  
        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error; 
    }
};

export default fetchData;