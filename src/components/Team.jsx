import React from "react";
import { DeleteIcon } from "./common/Icons";
import { EditIcon } from "./common/Icons";
import { AddNewUserIcon } from "./common/Icons";
const Team = () => {
  const TeamDetails = [
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
  return (
    <>
      <section className="px-lg-5 px-3 py-2">
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Team Members
          </h3>
          <p className="fw-normal color_gray font-md mb-0">
            add team members for management
          </p>
          <div className="d-flex justify-content-between align-items-center mt-5 pt-4">
            <span className="ff_thicccboi_semibold color_gray font-xl">
              User Details
            </span>
            <button className="border-0 py-2 px-4 bg_light_blue text-white fs-md ff_thicccboi_semibold d-flex align-items-center">
              <AddNewUserIcon /> <span className="ms-2">Add New User</span>
            </button>
          </div>
          <div className="overflow-auto pb-3">
            <table className="w-100 mt-4 ">
              <tbody>
                <tr>
                  <th className="font-sm color_gray ff_thicccboi_semibold py-3 ps-3 pe-5 pe-lg-0">
                    Username
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold py-3 pe-5 pe-lg-0">
                    Name
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold py-3 pe-5 pe-lg-0">
                    Email
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold py-3 pe-5 pe-lg-0">
                    Role
                  </th>
                </tr>
                {TeamDetails &&
                  TeamDetails.map((item, index) => {
                    return (
                      <tr
                        className={`${index % 2 ? "" : "bg_light_grey"}  `}
                        key={index}
                      >
                        <td className="ff_thicccboi_semibold color_dark_black border_left font-md py-3 ps-3 pe-5 pe-lg-0">
                          {item.username}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0">
                          {item.name}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0">
                          {item.email}
                        </td>
                        {/* <div className="d-flex align-items-center justify-content-between border_right"> */}
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3  pe-5 pe-lg-0">
                          {item.role}
                        </td>
                        <td className="me-4 border_right text-nowrap  pe-5 pe-lg-0">
                          <a className="me-4" href="#">
                            <DeleteIcon />
                          </a>
                          <a href="#">
                            <EditIcon />
                          </a>
                          {/* </div> */}
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

export default Team;
