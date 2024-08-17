/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface HeaderTitleProps {
  type?: "title" | "greeting";
  title: string;
  subtitle: string;
  user?: string;
}

declare interface TotalBalanceCardProps {
  accounts: [];
  totalBanks: number;
  totalCurrentBalance: number;
}

declare interface SiderbarProps {
  user: User;
}

declare interface SidebarLinkProps {
  href: string;
  icon: string;
  title: string;
}
