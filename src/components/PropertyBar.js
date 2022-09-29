import React from "react";
import "../App.css";
import styled from "styled-components";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
`;

function PropertyBar() {
  return (
    <Wrapper>
      <span style={{ padding: "0px 20px 0px 0px" }}>
        <svg
          height="20"
          viewBox="0 0 36.289 20.768"
          alt="Olx logo"
          style={{ fill: "#3a77ff" }}
        >
          <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
        </svg>
      </span>
      <Button
        style={{ padding: "0px 20px" }}
        className="headBtns"
        variant="text"
        sx={{ color: "black", fontSize: 12 }}
        startIcon={
          <DirectionsCarFilledOutlinedIcon
            style={{
              padding: 5,
              borderRadius: "50%",
              backgroundImage:
                "linear-gradient(to bottom, #d9d6d6, #e2e0e1, #eceaeb, #f5f5f5, #ffffff)",
            }}
          />
        }
      >
        MOTORS
      </Button>
      <Button
        style={{ padding: "0px 20px" }}
        className="headBtns"
        variant="text"
        sx={{ color: "black", fontSize: 12 }}
        startIcon={
          <LocationCityOutlinedIcon
            style={{
              padding: 5,
              borderRadius: "50%",
              backgroundImage:
                "linear-gradient(to bottom, #d9d6d6, #e2e0e1, #eceaeb, #f5f5f5, #ffffff)",
            }}
          />
        }
      >
        PROPERTY
      </Button>
    </Wrapper>
  );
}

export default PropertyBar;
