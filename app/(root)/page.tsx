import HeaderTitle from "@/components/HeaderTitle";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceCard from "@/components/TotalBalanceCard";

const Home = () => {
  const loggedIn = { firstName: "Zac" };

  return (
    <section className="home">
      <div className="home-content ">
        <header className="home-header">
          <HeaderTitle
            type="greeting"
            title="Bienvenue"
            user={loggedIn?.firstName || "invité"}
            subtitle="Accédez à vos comptes et transactions"
          />
          <TotalBalanceCard
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200.3}
          />
        </header>
      </div>
      <RightSideBar />
    </section>
  );
};

export default Home;
