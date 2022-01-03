import React from "react";
import { FaBeer } from "react-icons/fa";

export interface IProps {
  name: string;
  logo: React.ReactNode;
  sub?: string[] | undefined;
  drop: boolean;
}

export interface TProps {
  type: string;
  day: string;
  month: string;
  details: string;
  amount: string;
}

export const Util: IProps[] = [
  {
    name: "Overview",
    logo: <i className="fa fa-home text-white" aria-hidden="true"></i>,
    drop: false,
  },
  {
    name: "Transactions",
    drop: true,
    sub: ["Transafer", "Withdrawal", "Deposit"],
    logo: (
      <i className="fa fa-graduation-cap text-white" aria-hidden="true"></i>
    ),
  },
  {
    name: "Wallet",
    logo: <i className="fa fa-cog text-white" aria-hidden="true"></i>,
    sub: ["Alert", "Breadboard", "Bars", "Borders"],
    drop: true,
  },
  {
    name: "Settings",
    logo: <i className="fa fa-home text-white" aria-hidden="true"></i>,
    drop: false,
  },
  {
    name: "Profile",
    drop: true,
    logo: (
      <i className="fa fa-graduation-cap text-white" aria-hidden="true"></i>
    ),
    sub: ["Edit Profile", "Change Passowrd"],
  },
  {
    name: "Logout",
    logo: <i className="fa fa-cog text-white" aria-hidden="true"></i>,
    drop: true,
    sub: ["Alert", "Breadboard", "Bars", "Borders"],
  },
];

export const Transactions: TProps[] = [
  {
    type: "debit",
    amount: "5000",
    day: "30",
    month: "Nov",
    details: "Details",
  },
  {
    type: "credit",
    amount: "5000",
    day: "30",
    month: "Nov",
    details: "Details",
  },
  {
    type: "debit",
    amount: "5000",
    day: "30",
    month: "Nov",
    details: "Details",
  },
  {
    type: "credit",
    amount: "2400",
    day: "30",
    month: "Nov",
    details: "Details",
  },
  {
    type: "credit",
    amount: "5000",
    day: "30",
    month: "Nov",
    details: "Details",
  },
  {
    type: "debit",
    amount: "5000",
    day: "22",
    month: "Jan",
    details: "Details",
  },
  {
    type: "debit",
    amount: "5000",
    day: "30",
    month: "Dec",
    details: "Details",
  },
  {
    type: "credit",
    amount: "5000",
    day: "30",
    month: "Nov",
    details: "Details",
  },
];
