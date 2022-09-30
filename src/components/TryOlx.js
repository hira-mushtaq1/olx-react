import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(0, 47, 52, 0.03);
`;

function TryOlx() {
  return (
    <Wrapper>
      <div style={{ width: "440px", height: "200px" }}>
        <img
          width="100%"
          src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
          alt=""
        />
      </div>
      <div
        style={{
          width: "395px",
          height: "200px",
          borderRight: "2px solid lightgrey",
        }}
      >
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bolder" }}
          style={{ margin: "2.2rem 0 10px", paddingLeft: "30px" }}
          gutterBottom
          variant="subtitle2"
          component="p"
        >
          TRY THE OLX APP
        </Typography>
        <Typography
          sx={{ fontSize: "1.3rem" }}
          style={{ paddingLeft: "30px" }}
          gutterBottom
          variant="subtitle2"
          component="p"
        >
          Buy, sell and find just about anything using the app on your mobile.
        </Typography>
      </div>
      <div
        style={{
          width: "400px",
          height: "200px",
          padding: "10px 10px 10px 20px",
        }}
      >
        <div>
          <Typography
            sx={{ fontSize: "16px" }}
            style={{ padding: "20px 20px 5px 30px", fontWeight: "bold" }}
            gutterBottom
            variant="subtitle2"
            component="p"
          >
            GET YOUR APP TODAY
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
            alt=""
            width="128px"
            height="40px"
            style={{ margin: "5px", cursor: "pointer" }}
          />
          <img
            src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
            alt=""
            width="128px"
            height="40px"
            style={{ margin: "5px", cursor: "pointer" }}
          />
          <img
            src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
            alt=""
            width="128px"
            height="40px"
            style={{ margin: "5px", cursor: "pointer" }}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default TryOlx;
