import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InsomniaClinicalUpdate from "./InsomniaClinicalBackend";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navigation from "../../Navigation/navigation";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import Footer from "../../Footer/Footer";
export default function InsomniaClinical() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [when,setWhen] = useState('');
  const [what,setWhat] = useState('');

  const handleWhen = (event)=>{
    setWhen(event.target.value);
  }

  const handleWhat = (event)=>{
    setWhat(event.target.value);
  }
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8887/api/insomniaclinical")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(localStorage.getItem("admin") === "true");
  }, []);

  const [setValue] = useState("");

  const store_value = (event) => {
    setValue(event.target.value);
  };

  const update_value = (event) => {
    if (admin) {
      event.preventDefault();
      InsomniaClinicalUpdate(event.target.name, event.target.id, event.target.value)
        .then((data) => {
          alert(`Data successfully updated!\nNew Value: ${event.target.value}`);
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to update!");
        });
    } else {
      alert("You must be an administrator to edit");
    }
  };


  const groupDataByHeader = (data) => {
    const groupedData = {};

    data.forEach((item) => {
      const header = item.LIST_HEADERS_Id;
      if (!groupedData[header]) {
        groupedData[header] = [];
      }
      groupedData[header].push(item);
    });

    return groupedData;
  };

  const groupedData = groupDataByHeader(data);

  return (
    <>
      <Navigation />
      <Search onSearch={handleSearch}></Search>
      <div id="insomniaClinical">
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography id="topicHeader">Sedatives/Hypnotics Clinical Guide</Typography>
        </Box>

        {Object.keys(groupedData).map((headerKey) =>
          admin ? (
            <Accordion key={headerKey} id={headerKey}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${headerKey}-content`}
                id={`${headerKey}-header`}
              >
                <Typography>
                  <b>{headerKey}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {groupedData[headerKey].map((dataObj, index) => (
                    <input
                      key={index}
                      id={`LIST_HEADERS-${index}`}
                      name={dataObj[`Id`]}
                      type="text"
                      onFocus={store_value}
                      onBlur={update_value}
                      defaultValue={dataObj[`Description`]}
                    />
                  ))}
                </div>
              </AccordionDetails>

            </Accordion>
          ) : (
            <Accordion key={headerKey}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${headerKey}-content`} id={`panel${headerKey}-header`}>
                <Typography>
                  <b>{headerKey}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  {groupedData[headerKey].map((dataObj, index) => (
                    <li key={index}>
                      {dataObj.Description}
                    </li>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        )}
        <div className='keynote-div'>
          <p className='keynote'><b>Key notes:</b> SHYPCLIN_BFR means before prescribing, SHYPCLIN_STR means starting, SHYPCLIN_END means ending </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
