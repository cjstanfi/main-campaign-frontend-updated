import CardsGraphOne from "../../assets/images/svg/cards-graph-1.svg";
import CardsGraphTwo from "../../assets/images/svg/cards-graph-2.svg";
import Profile from "../settings/Profile";
import Facebook from "../settings/Facebook";
import Crm from "../settings/Crm";
import Privacy from "../settings/Privacy";
import Business from "../settings/Business";
import Billing from "../settings/Billing";
import Team from "../settings/Team";
import Security from "../settings/Security";
import LeadsCenter from "../leadscenter/LeadsCenter";
import { AddIcon, FileIcon, MenuIcon, PlusIcon, SearchIcon } from "./Icons";
import {
  AnalyticsIcon,
  DashboardIcon,
  LeadsIcon,
  LeadsRightArrowIcon,
  LeftArrowIcon,
  RightArrowIcon,
  SettingsIcon,
  SupportIcon,
} from "./Icons";
export const cardsData = [
  {
    heading: "Total Revenue",
    subheading: 1.5,
    amount: "$25,000",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Spend",
    subheading: 1.5,
    amount: "$1,200",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Impression",
    subheading: 1.5,
    amount: "250.45K",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Reached",
    subheading: 2.25,
    amount: "50.2k",
    imgUrl: CardsGraphOne,
  },
  {
    heading: "Total Clicks",
    subheading: -0.5,
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
        url: "/dashboard/home",
      },
      {
        icon: <AnalyticsIcon />,
        title: "Analytics",
        url: "/dashboard/analytics",
      },
      {
        icon: <LeadsIcon />,
        title: "Leads Center",
        url: "/dashboard/leads-center",
      },
    ],
  },
  {
    name: "MORE",
    list: [
      {
        icon: <SettingsIcon />,
        title: "Settings",
        url: "/dashboard/settings",
      },
      {
        icon: <SupportIcon />,
        title: "Support",
        url: "/dashboard/support",
      },
    ],
  },
];
export const AddManagerDetails = [
  {
    campaign: "Main Campaign",
    delivery: "Active",
    budget: 0,
    leads: 2,
    reach: 0,
    impression: "3,456,125",
    spent: 125,
    conversion: 0,
    revenue: 125,
    roas: "1.00",
  },
  {
    campaign: "Test",
    delivery: "Active",
    budget: 0,
    leads: 5,
    reach: 0,
    impression: "0",
    spent: 412,
    conversion: 0,
    revenue: 412,
    roas: "5.00",
  },
  {
    campaign: "Lead Trainer V1",
    delivery: "No Ads",
    budget: 0,
    leads: 6,
    reach: 0,
    impression: "0",
    spent: 456,
    conversion: 0,
    revenue: 456,
    roas: "0",
  },
  {
    campaign: "Lead Trainer V2",
    delivery: "Active",
    budget: 0,
    leads: 8,
    reach: 0,
    impression: "0",
    spent: 654,
    conversion: 0,
    revenue: 654,
    roas: "0",
  },
  {
    campaign: "John Wick",
    delivery: "Off",
    budget: 0,
    leads: 7,
    reach: 0,
    impression: "0",
    spent: 125,
    conversion: 0,
    revenue: 125,
    roas: "0",
  },
  {
    campaign: "Lead Trainer V2",
    delivery: "Active",
    budget: 0,
    leads: 8,
    reach: 0,
    impression: "0",
    spent: 654,
    conversion: 0,
    revenue: 654,
    roas: "0",
  },
  {
    campaign: "John Wick",
    delivery: "Off",
    budget: 0,
    leads: 7,
    reach: 0,
    impression: "0",
    spent: 125,
    conversion: 0,
    revenue: 125,
    roas: "0",
  },
];

export const TabData = [
  {
    tabHeading: "Profile",
    content: <Profile />,
  },
  {
    tabHeading: "Facebook",
    content: <Facebook />,
  },
  {
    tabHeading: "CRM",
    content: <Crm />,
  },
  {
    tabHeading: "Business",
    content: <Business />,
  },
  {
    tabHeading: "Privacy",
    content: <Privacy />,
  },
  {
    tabHeading: "Billing",
    content: <Billing />,
  },
  {
    tabHeading: "Team",
    content: <Team />,
  },
  {
    tabHeading: "Security",
    content: <Security />,
  },
];
export const TableTabs = [
  {
    pageNo: <LeftArrowIcon />,
  },
  {
    pageNo: 1,
  },
  {
    pageNo: 2,
  },
  {
    pageNo: 3,
  },
  {
    pageNo: 4,
  },

  {
    pageNo: "...",
  },
  {
    pageNo: 10,
  },
  {
    pageNo: <RightArrowIcon />,
  },
];
export const LeadsCenterContactDetails = [
  {
    tabHeading: "All",
    content: <LeadsCenter />,
  },
  {
    tabHeading: "Unread",
    content: <LeadsCenter />,
  },
  {
    tabHeading: "Raw Leads",
    content: <LeadsCenter />,
    noOfLeads: "2",
    arrow: <LeadsRightArrowIcon />,
  },
  {
    tabHeading: "In Porgress Leads",
    content: <LeadsCenter />,
    noOfLeads: "0",
    arrow: <LeadsRightArrowIcon />,
  },
  {
    tabHeading: "Interested Leads",
    content: <LeadsCenter />,
    noOfLeads: "0",
    arrow: <LeadsRightArrowIcon />,
  },
  {
    tabHeading: "Converted Leads",
    content: <LeadsCenter />,
    noOfLeads: "0",
    arrow: <LeadsRightArrowIcon />,
  },
];

export const dashboardNavTabsData = [
  {
    icon: <FileIcon />,
    name: "Campaign",
  },
  {
    icon: <MenuIcon />,
    name: "Ad set",
  },
  {
    icon: <AddIcon />,
    name: "Ad",
  },
];

export const timedurationdata = [
  {
    value: "24 hours",
    id: 0,
  },
  {
    value: "7 days",
    id: 1,
  },
  {
    value: "30 days",
    id: 2,
  },
  {
    value: "1 year",
    id: 3,
  },
];
