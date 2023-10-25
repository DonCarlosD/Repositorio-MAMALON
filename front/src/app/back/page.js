"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

function FastAPIPage() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_FASTAPI_URL' with your FastAPI server's URL
    const apiUrl = "http://127.0.0.1:8000/";

    setLoading(true);

    axios
      .get(apiUrl)
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>FastAPI Response</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <div>{response.message}</div>}
    </div>
  );
}

export default FastAPIPage;
