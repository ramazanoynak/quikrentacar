"use client"; // If you're using the Next.js App Router, mark this as a client component

import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css"; // Create a CSS Module for styling

// Example suppliers array. In your actual code, you can import or fetch this data.
const suppliers = [
  {
    partner_id: "SIXT",
    name: "SIXT",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/bf7a6560401f48dd8771f8cb32b3d5d3_orig.png"
  },
  {
    partner_id: "NATIONAL",
    name: "National",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/f2582f6516e84119b9a91dfefd7e522d_orig.png"
  },
  {
    partner_id: "ENTERPRISE",
    name: "Enterprise",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/2fc26e3ecb214fbea5c6670053737fc3_orig.png"
  },
  {
    partner_id: "ALAMO",
    name: "Alamo",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/a67f055c09bb4ed5821188a71d6c3299_orig.png"
  },
  {
    partner_id: "KEDDY",
    name: "Keddy by Europcar",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/89e38211c6bb4381bd18c3150508a32c_orig.png"
  },
  {
    partner_id: "EUROPCAR",
    name: "Europcar",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/b64082429b7740a3b91549ea86168e1d_orig.jpg"
  },
  {
    partner_id: "HERTZ",
    name: "Hertz",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/9c0970a11cc348ca9f63276ef0982dfa_orig.png"
  },
  {
    partner_id: "THRIFTY",
    name: "Thrifty",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/ad6680de9d8840248db22b17e6b4f526_orig.png"
  },
  {
    partner_id: "BUDGET",
    name: "Budget",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/ed565cd25b2b414da755b7b2d294753e_orig.png"
  },
  {
    partner_id: "DOLLAR",
    name: "Dollar",
    logo_url:
      "https://d2f9dw3b0opbul.cloudfront.net/1bcdb8bf7f3d42ea93005903f7dd3d12_orig.png"
  }
];

export default function Preloader() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next index; loop back to 0 at the end
      setActiveIndex((prevIndex) => (prevIndex + 1) % suppliers.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.preloader}>
     <div className={styles.spinner}></div>
      <h1 className={styles.brandName}>quikrentacar.com</h1>
      <div className={styles.supplierRow}></div>

      <div className={styles.logoContainer}>
        {suppliers.map((supplier, index) => (
          <div
            key={supplier.partner_id}
            className={
              index === activeIndex ? styles.logoActive : styles.logoGray
            }
          >
            <img src={supplier.logo_url} alt={supplier.name} />
          </div>
        ))}
      </div>
      <h2 className={styles.loadingText}>Loading best deals...</h2>
    </div>
  );
}
