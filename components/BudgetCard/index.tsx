import Image from "next/image";

const BudgetCard = ({
  total = 100,
  balance = 50,
}: {
  total: number;
  balance: number;
}) => {
  return (
    <div className="bg-blue-50 w-full h-[72px] rounded-lg display flex relative">
      <div id="right-side " className="p-4 relative">
        <div className="w-10 h-10 relative bg-blue-200 rounded-full p-[10px]">
          <div className="relative w-full h-full">
            <Image
              src={"/icons/monitor.svg"}
              fill
              alt="monitor"
              className="object-contain"
            ></Image>
          </div>
        </div>
      </div>
      <div
        id="left-side"
        className="flex-grow pt-3 pb-5 pr-4 flex flex-col gap-2"
      >
        <div className="flex justify-between font-inter text-sm">
          <h1>Abonnements</h1>
          <p>{balance}€ restant</p>
        </div>
        <div className="bg-blue-200 w-full min-h-2 rounded-3xl ">
          <div
            className={`h-full  bg-blue-400 rounded-3xl `}
            style={{ width: (balance / total) * 100 + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
