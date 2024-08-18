import Image from "next/image";

const CreditCard = () => {
  return (
    <div className="w-80 h-48 bg-pink-500 rounded-2xl overflow-hidden flex ">
      <Image
        src={"/icons/lines.svg"}
        width={320}
        height={190}
        alt="credit card"
        className="absolute z-10 "
      ></Image>
      <div className="bg-blue-900 w-9/12 h-full flex flex-col flex-shrink-0 justify-between p-4 text-white relative z-20">
        <h1 className="font-inter text-base">BoursoBank</h1>
        <div className="flex flex-col">
          <div className="flex justify-between text-xs font-manrope">
            <h2>ZACHARIE BOUHAYA</h2>
            <p>06/24</p>
          </div>
          <p className="text-base font-manrope">1234 1234 1234 1234</p>
        </div>
      </div>
      <div className="text-black-1 flex-grow-0 p-4 flex flex-col justify-between">
        <Image
          src={"/icons/paypass.svg"}
          width={20}
          height={24}
          alt="paypass logo"
          className="self-end mr-[4px]"
        />
        <Image src={"/icons/visa.svg"} width={45} height={32} alt="visa logo" />
      </div>
    </div>
  );
};

export default CreditCard;
