const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      Sidebar
      {children}
    </main>
  );
};

export default RootLayout;
