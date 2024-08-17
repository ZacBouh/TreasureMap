"use client";

import CountUp from "react-countup";

const CountUpWrapper = ({ amount }: { amount: number }) => {
  return (
    <CountUp decimal="," decimals={2} separator=" " suffix=" €" end={amount} />
  );
};

export default CountUpWrapper;
