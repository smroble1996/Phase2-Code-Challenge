import React, { useEffect, useState } from "react";
import BillCollection from "./components/BillCollection";
import BillsCast from "./components/BillsCast";

export default function App() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bills")
      .then((res) => res.json())
      .then((json) => setBills(json));
  }, []);

  function castBill(id) {
    setBills(
      bills.map((bill) => (bill.id === id ? { ...bill, casted: true } : bill))
    );
  }

  function fireBill(id) {
    setBills(
      bills.map((bill) => (bill.id === id ? { ...bill, casted: false } : bill))
    );
  }

  function kickoffBill(id) {
    setBills( bills.filter((bill) => bill.id !== id) )
  }

  return (
    <div>
      <BillsCast
        bills={bills.filter((bill) => bill.casted)}
        handleCLick={fireBill}
        kickoffBill={kickoffBill}
      />
      <BillCollection
        bills={bills}
        handleClick={castBill}
        kickoffBill={kickoffBill}
      />
    </div>
  );
}
