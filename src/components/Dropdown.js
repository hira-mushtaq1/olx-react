import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";

function Dropdown() {
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
      <Select
        // value={"Pakistan"}
        defaultValue="Pakistan"
        style={{ marginLeft: 30, outline: "2px solid black" }}
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
          <MyLocationRoundedIcon color="primary" style={{ marginRight: 10 }} />
          Use Current Location
        </MenuItem>
        <MenuItem value={"Pakistan"} style={{ padding: "15px 15px 15px 20px" }}>
          <FmdGoodOutlinedIcon style={{ marginRight: 10 }} />
          See ads in all Pakistan
        </MenuItem>
        <MenuItem disabled value="" style={{ padding: "15px 15px 15px 20px" }}>
          <p style={{ fontSize: 12 }}>CHOOSE REGION</p>
        </MenuItem>
        {locations.map((values, i) => (
          <MenuItem
            noWrap
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
  );
}

export default Dropdown;
