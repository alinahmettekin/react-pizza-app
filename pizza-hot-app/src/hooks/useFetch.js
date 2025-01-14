import { useCallback, useState, useEffect } from "react";

export default function useFetch(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setLoading(true);

      try {
        const response = await fetch(url, { ...config, body: data });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Bir şeyler ters gitti");
        }
        setData(result);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { data, error, loading, sendRequest };
}
