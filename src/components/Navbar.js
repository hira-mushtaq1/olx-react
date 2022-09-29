import React from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import Searchbar from "./Searchbar";

function Navbar() {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const locations = [
    {
      country: "Pakistan",
      city: "Azad Kashmir",
    },
    {
      country: "Pakistan",
      city: "Balochistan",
    },
    {
      country: "Pakistan",
      city: "Islamabad Capital Territory",
    },
    {
      country: "Pakistan",
      city: "Khyber Pakhtunkhwa",
    },
    {
      country: "Pakistan",
      city: "Northern Areas",
    },
    {
      country: "Pakistan",
      city: "Punjab",
    },
    {
      country: "Pakistan",
      city: "Sindh",
    },
  ];

  return (
    <div>
      <Wrapper>
        <svg
          height="35"
          viewBox="0 0 36.289 20.768"
          alt="Olx logo"
          class="_063feb70"
        >
          <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
        </svg>

        <div>
          <Select
            // value={"Pakistan"}
            defaultValue="Pakistan"
            style={{ marginLeft: 30, border: "2px solid black" }}
            sx={{
              paddingRight: 15,
              paddingTop: 0,
              paddingBottom: 0,
              backgroundColor: "white",
            }}
            renderValue={(value) => {
              return (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <SvgIcon color="lightgrey">
                    <SearchOutlinedIcon />
                  </SvgIcon>
                  {value}
                </Box>
              );
            }}
          >
            <MenuItem value={""} style={{ padding: "20px 20px 20px 20px" }}>
              <MyLocationRoundedIcon
                color="primary"
                style={{ marginRight: 10 }}
              />
              Use Current Location
            </MenuItem>
            <MenuItem
              value={"Pakistan"}
              style={{ padding: "15px 15px 15px 20px" }}
            >
              <FmdGoodOutlinedIcon style={{ marginRight: 10 }} />
              See ads in all Pakistan
            </MenuItem>
            <MenuItem
              disabled
              value=""
              style={{ padding: "15px 15px 15px 20px" }}
            >
              <p style={{ fontSize: 12 }}>CHOOSE REGION</p>
            </MenuItem>
            {locations.map((values, i) => (
              <MenuItem
                style={{ padding: "15px 15px 15px 20px" }}
                key={i}
                value={values.city}
              >
                <FmdGoodOutlinedIcon style={{ marginRight: 10 }} />
                {values.city}, {values.country}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Searchbar />
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
