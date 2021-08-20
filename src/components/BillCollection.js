import React from "react";
import BillCard from "./BillCard";

export default function BillCollection({ bills , handleClick, kickoffBill}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map((bill) => (
          <BillCard key={bill.id} bill={bill} handleClick ={handleClick} kickoffBill={kickoffBill} />
        ))}
      </div>
    </div>
  );
}
