'use client';
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'false';
    setIsLoggedIn(loginStatus);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/home');
    }
  }, [isLoggedIn, router]);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Header */}
      <Header function1={handleLogin} />
      <Hero/>
      <AboutUs/>
      
    </div>
  );
}
