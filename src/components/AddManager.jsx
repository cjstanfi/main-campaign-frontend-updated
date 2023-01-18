import React from "react";
import { UpArrowIcon } from "./common/Icons";
import Form from "react-bootstrap/Form";
const AddManager = () => {
  const AddManagerDetails = [
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
  return (
    <>
      <section className="p-3">
        <div className="box">
          <div className="overflow-auto pb-3">
            <table className="w-100 mt-4 add_manager">
              <tbody>
                <tr>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 ps-3 pe-5 pe-lg-0"></th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Off / On
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 ps-3">
                    Campaign
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Delivery
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Budget
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Leads
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Reach
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Impression
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Spent
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Conversion
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Revenue
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    ROAS
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Performance
                  </th>
                </tr>
                {AddManagerDetails &&
                  AddManagerDetails.map((item, index) => {
                    return (
                      <tr
                        className={`${index % 2 ? "" : "bg_light_grey"}  `}
                        key={index}
                      >
                        <td className="ff_thicccboi_semibold color_gray font-md py-3 text-nowrap ps-3 pe-5 pe-lg-0">
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="ff_thicccboi_semibold color_gray font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          <Form.Check type="switch" id="custom-switch" />
                        </td>
                        <td className="ff_thicccboi_semibold color_gray font-md py-3 text-nowrap pe-5 pe-lg-0 ps-3">
                          {item.campaign}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.delivery}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.budget}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.leads}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.reach}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.impression}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.spent}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.conversion}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.revenue}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.roas}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          <UpArrowIcon />
                          <span className="uparrow">
                            {" "}
                            <UpArrowIcon />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddManager;
