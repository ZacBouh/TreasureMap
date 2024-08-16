import { formatCurrency } from "@/lib/utils";
import CountUp from "react-countup";
import CountUpWrapper from "../CountUpWrapper";
import RoundChart from "../RoundChart";

const TotalBalanceCard = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceCardProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <RoundChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-18 font-semibold text-gray-900">
          Comptes: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-14 font-medium text-gray-600">Solde Total</p>
          <p className="text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex-center gap-2">
            <CountUpWrapper amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceCard;
