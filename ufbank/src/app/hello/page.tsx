"use client";

import { useState, useEffect } from "react";
export default function HelloPage() {
  const [message, setMessage] = useState("carregando...");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/hello");
        const data = await response.json();
        setMessage(data.message); 
      } catch (error) {
        console.error( error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl">{message}</h1>
    </main>
  );
}