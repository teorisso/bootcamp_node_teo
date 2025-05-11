"use client";

import { useState, useEffect } from "react";

export default function useFetch(apiUrl: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
}

