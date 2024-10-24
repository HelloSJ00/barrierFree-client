"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    const fetchData = async () => {
      //Spring Boot API에서 data fetch
      try {
        const response = await fetch(
          "http://default-spring-service-a6f2a-26431913-e894be08b224.kr.lb.naverncp.com:8080/api/hello"
        );
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage("Error!!!!");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Deployment Test</h1>
      <p>Response: {message}</p>
    </div>
  );
}
