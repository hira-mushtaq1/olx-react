import "./App.css";
import PropertyBar from "./components/PropertyBar";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Typography from "@mui/material/Typography";
import Cards from "./components/Card";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 0px 120px 0px 120px;
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const adsData = [
    {
      addTitle: "OnePlus 9 Pro 5G",
      price: "Rs 117,000",
      location: "DHA Phase 6",
      city: "Lahore",
      imgSrc: "https://images.olx.com.pk/thumbnails/288494322-240x180.webp",
    },
    {
      addTitle: "Toyota Hilux Revo 3.0 Euro1 2017",
      price: "Rs 6,990,000",
      location: "PECHS",
      city: "Karachi",
      imgSrc: "https://images.olx.com.pk/thumbnails/288287008-240x180.webp",
    },
    {
      addTitle: "LENOVO i5 5TH Laptop.",
      price: "Rs 23,000",
      location: "Manzoor Colony - Sector D",
      city: "Karachi",
      imgSrc: "https://images.olx.com.pk/thumbnails/285344418-240x180.webp",
    },
    {
      addTitle: "Civic prismatic 2002",
      price: "Rs 900,000",
      location: "New Karachi - Sector 4",
      city: "Karachi",
      imgSrc: "https://images.olx.com.pk/thumbnails/287026579-240x180.webp",
    },
    {
      addTitle: "Iphone 13 Pro Max 128gb with Box",
      price: "Rs 228,500",
      location: "DHA Phase 6",
      city: "Lahore",
      imgSrc: "https://images.olx.com.pk/thumbnails/289190423-240x180.webp",
    },
    {
      addTitle: "KIA CLASSIC 2000 MODEL",
      price: "Rs 525,000",
      location: "Mozang",
      city: "Lahore",
      imgSrc: "https://images.olx.com.pk/thumbnails/289190679-240x180.webp",
    },
    {
      addTitle: "OnePlus 9 Pro 5G",
      price: "Rs 117,000",
      location: "DHA Phase 6",
      city: "Lahore",
      imgSrc: "https://images.olx.com.pk/thumbnails/284897260-240x180.webp",
    },
    {
      addTitle: "Iphone 7 plus 32gb",
      price: "Rs 32,000",
      location: "Clifton Cantonment",
      city: "Karachi",
      imgSrc: "https://images.olx.com.pk/thumbnails/289192708-240x180.webp",
    },
    {
      addTitle: "honda 125",
      price: "Rs 95,000",
      location: "Others",
      city: "Faisalabad",
      imgSrc: "https://images.olx.com.pk/thumbnails/289073344-240x180.webp",
    },
    {
      addTitle: "google pixel 6 pro",
      price: "Rs 120,000",
      location: "Nadia Ghee Mill Chowk",
      city: "Lahore",
      imgSrc: "https://images.olx.com.pk/thumbnails/289191335-240x180.webp",
    },
    {
      addTitle: "Oppo F19 6/128",
      price: "Rs 26,000",
      location: "Behar Colony",
      city: "Karachi",
      imgSrc: "https://images.olx.com.pk/thumbnails/289193332-240x180.webp",
    },
    {
      addTitle: "Suzuki Alto 1000cc full original",
      price: "Rs 650,000",
      location: "Garden West",
      city: "Karachi",
      imgSrc: "https://images.olx.com.pk/thumbnails/288868974-240x180.webp",
    },
  ];

  let filterCards = (filterCriteria) => {
    adsData.filter((x) => x.addTitle.includes(filterCriteria));
    setCardStatus([...filterCards]);
    console.log("running...");
  };

  let [cardStatus, setCardStatus] = useState([]);
  cardStatus = adsData.map((v, i) => (
    <Cards
      addTitle={v.addTitle}
      price={v.price}
      location={v.location}
      city={v.city}
      imgSrc={v.imgSrc}
      key={i}
    />
  ));

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f7f8f8",
          width: "100%",
        }}
      >
        <Wrapper style={{ marginBottom: 20 }}>
          <PropertyBar />
        </Wrapper>

        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <Add />
        </Wrapper>
      </div>
      <Wrapper>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ margin: "40px 0px 20px 0px" }}
        >
          Fresh Recommendations
        </Typography>
      </Wrapper>

      <Wrapper>{cardStatus}</Wrapper>
    </div>
  );
}

export default App;
