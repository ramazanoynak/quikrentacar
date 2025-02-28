"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import SrollTop from "./ScrollTop";

export default function ClientWrapper() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <>
    
      <SrollTop />
      <Toaster />
    </>
  );
}
