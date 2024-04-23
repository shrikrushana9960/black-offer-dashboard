import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import AspectRatio from "@mui/joy/AspectRatio";
const CardsForData = ({ item }) => {
  return (
    <div>
      <Card
        variant="solid"
        style={{ width: "40vw", margin: "1.2rem", background: "black" }}
      >
        <div>
          <AspectRatio
            variant="soft"
            sx={{
              flexGrow: 1,
              display: "contents",
              "--AspectRatio-paddingBottom":
                "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Typography
            level="title-md"
            sx={{ color: "white", marginTop: "10px" }}
          >
            {item.sector ? item.sector : "Sector"}
          </Typography>
          <div className="cardText">
            <p style={{ fontWeight: "bold" }}>
              <li> {item.topic ? item.topic : "No Info"} </li>
              <li> {item.title ? item.title : "No Info"} </li>
              <li> {item.insight ? item.insight : "No Info"} </li>
              <li> {item.url ? item.url : "No Info"} </li>
              <li> {item.region ? item.region : "No Info"} </li>
              <li> {item.country ? item.country : "No Info"} </li>
              <li> {item.source ? item.source : "No Info"} </li>
              <li> {item.pestle ? item.pestle : "No Info"} </li>
              <li> {item.start_year ? item.start_year : "No Info"} </li>
              <li> {item.end_year ? item.end_year : "No Info"} </li>
              <li> {item.added ? item.added : "No Info"} </li>
              <li> {item.published ? item.published : "No Info"} </li>
              <li> {item.intensity ? item.intensity : "No Info"} </li>
              <li> {item.likelihood ? item.likelihood : "No Info"} </li>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardsForData;
