import MobileNavBar from "@/components/MobileNavBar";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const loggedIn = { firstName: "Zac", lastName: "Bouhaya" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex-grow">
        <MobileNavBar />
        {children}
      </div>
    </main>
  );
};
export default RootLayout;
