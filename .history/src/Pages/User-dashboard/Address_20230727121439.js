/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import { getAllAddress } from "../../Repository/User/Addresses";
import Profilebar from "./Profilebar";

const Address = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const res = await getAllAddress();
      setData(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <div>
      <Navbar />

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Your account </a>
            </li>
            <li>
              <a href="/"> Addresses </a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container-width">
        <div className="page_title_account">Your account</div>

        <div className="user-dashboard">
          <div className="left-container">
            <Profilebar />
          </div>

          <div className="right-container">
            <div className="block_content-right">
              <div class="title_account_second">Your personal information</div>

              {data?.length === 0 ? }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
