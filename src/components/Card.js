import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Cards({ addTitle, price, location, city, imgSrc }) {
  return (
    <div>
      <Card sx={{ minWidth: 304, minHeight: 285, margin: "5px" }}>
        <CardActionArea>
          <CardMedia component="img" height="148" width="304" image={imgSrc} />
          <CardContent style={{ borderLeft: "6px solid #ffce32" }}>
            <Typography
              sx={{ fontSize: "1rem", lineHeight: "1.4rem" }}
              style={{ marginBottom: "15px" }}
              gutterBottom
              variant="subtitle2"
              component="div"
            >
              {addTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
              }}
              variant="p"
            >
              {price}
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              variant="caption"
              display="block"
              gutterBottom
              color={"textSecondary"}
            >
              {location} , {city}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
