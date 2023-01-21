import React from "react";
import TopBar from "../components/common/TopBar";
import LeadsCenterContactInfo from "../components/leadscenter/LeadsCenterContactInfo";
import LeadsCenterInfo from "../components/leadscenter/LeadsCenterInfo";
import LeadsDropdownTabs from "../components/leadscenter/LeadsDropdownTabs";
const LeadsCenter = () => {
  return (
    <>
      <TopBar
        heading="Opportunitites"
        para="Check your business campaigns leads here"
      />
      <LeadsCenterInfo />
      <LeadsDropdownTabs />
      <LeadsCenterContactInfo />
    </>
  );
};

export default LeadsCenter;
