"use client";

import CountUp from "react-countup";

const CountUpWrapper = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimal=","
        decimals={2}
        separator=" "
        suffix=" €"
        end={amount}
      />
    </div>
  );
};

export default CountUpWrapper;
