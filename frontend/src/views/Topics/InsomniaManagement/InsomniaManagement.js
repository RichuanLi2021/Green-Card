import "./InsomniaManagement.css";
import * as React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Navigation from "../../Navigation/navigation";
import Footer from "../../Footer/Footer";

import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";

export default function InsomniaManagement() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <Navigation />
      <Search onSearch={handleSearch}></Search>
      <br></br>
      <div id="insomniaManagement">
        <Typography id="mainTopic">Insomnia Management</Typography>
        <AccordionDetails>
          <Typography id="mainText">
            <div className="content-insomnia">
              <li className="li-insomnia">First line treatment: CBT-i (www.mysleepwell.ca) </li>
              <li className="li-insomnia">2nd line treatment: sedatives (if CBTi failure)</li>
              <li className="li-insomnia">
                <b>NNT with a sedative-hypnotic for improved sleep = 13, NNH = 6</b>
              </li>
            </div>
          </Typography>
        </AccordionDetails>
      </div>
      <Footer />
    </>
  );
}

