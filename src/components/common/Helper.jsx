import CardsGraphOne from "../../assets/images/svg/cards-graph-1.svg";
import CardsGraphTwo from "../../assets/images/svg/cards-graph-2.svg";
import {
  AnalyticsIcon,
  DashboardIcon,
  LeadsIcon,
  SettingsIcon,
  SupportIcon,
} from "./Icons";
export const cardsData = [
  {
    heading: "Total Revenue",
    subheading: "+1.5%",
    amount: "$25,000",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Spend",
    subheading: "+1.5%",
    amount: "$1,200",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Impression",
    subheading: "+1.5%",
    amount: "250.45K",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Reached",
    subheading: "+2.25%",
    amount: "50.2k",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Clicks",
    subheading: "-0.5%",
    amount: "45.5k",
    imgUrl: CardsGraphTwo,
  },
];
export const TeamDetails = [
  {
    username: "john42",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    role: "Administrator",
  },
  {
    username: "Ryan_parker11",
    name: "Ryan Parker",
    email: "ryanparker11142@gmial.com",
    role: "Analyst",
  },
  {
    username: "bershan_222",
    name: "Bershan Shaw",
    email: "bershanshaw-7625@yahoo.com",
    role: "Member",
  },
];
export const LeadsContactInfo = [
  {
    date: "10-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Test",
  },
  {
    date: "5-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Manual",
  },
  {
    date: "4-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Facebook",
  },
  {
    date: "3-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Test",
  },
  {
    date: "28-10-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Test",
  },
  {
    date: "3-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Trainer",
  },
  {
    date: "28-10-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Facebook",
  },
  {
    date: "3-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Facebook",
  },
  {
    date: "28-10-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Facebook",
  },
  {
    date: "3-11-2022",
    name: "John Wick",
    email: "jhonwick42@gmial.com",
    phone: "+1 202 555 0191",
    stage: "Raw Leads",
    source: "Facebook",
  },
];

export const sidebrlinks = [
  {
    name: "",
    list: [
      {
        icon: <DashboardIcon />,
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        icon: <AnalyticsIcon />,
        title: "Analytics",
        url: "/analytics",
      },
      {
        icon: <LeadsIcon />,
        title: "Leads Center",
        url: "/leads-center",
      },
    ],
  },
  {
    name: "MORE",
    list: [
      {
        icon: <SettingsIcon />,
        title: "Settings",
        url: "/settings",
      },
      {
        icon: <SupportIcon />,
        title: "Support",
        url: "/support",
      },
    ],
  },
];
