import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('Loading');

  useEffect(() => {
    const fetchData = async () => {
      //Spring Boot API에서 data fetch
      try {
        const response = await fetch('http://spring-service:8080/api/helo');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error!!!!');
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
