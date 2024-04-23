import React, { useState } from "react";
import Tabs from '@mui/joy/Tabs';
import Button from "react-bootstrap/Button";
import TabPanel from '@mui/joy/TabPanel';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
//import from files
import CardsForData from "./CardsForData";
import AccordionForCharts from "./AccordionForCharts";
import Filters from "./Filters";
import axios from "axios";
import { constants } from "./constants";
const Tabsrow = ({ data, setMainData }) => {
  const [limit, setLimit] = useState(5);
  const limitedData = data.slice(0, limit);
  const [search, setSearch] = useState("");
  const handleSearchResult = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        constants.URL + `/api/data/any/${search}`
      );
      setMainData(response.data.data);
      setSearch("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="tabsClass">
         <Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList>
        <Tab>Data</Tab>
        <Tab>Charts</Tab>
      </TabList>
    
        <TabPanel value={0} >
          <form
            className="form-inline"
            onSubmit={handleSearchResult}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search by Sector Name."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>

          <Filters setMainData={setMainData} />

          {limitedData && limitedData.length === 0 ? (
            <div style={{ margin: "1rem" }}>
              No data found, or please wait for a while.
            </div>
          ) : limitedData && limitedData.length > 0 ? (
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center"}}>
              {limitedData.map((e, i) => {
                return <CardsForData item={e} key={i} />;
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
          <Button
            style={{ background: "black", border: "none" }}
            onClick={() => setLimit((prev) => prev + 5)}
          >
            Show More
          </Button>
        </TabPanel>
        <TabPanel value={1} >
          <form
            className="form-inline"
            onSubmit={handleSearchResult}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              style={{ marginRight: "1rem" }}
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <Filters setMainData={setMainData} />
          <AccordionForCharts data={data} />
        </TabPanel>
        </Tabs>
    </div>
  );
};

export default Tabsrow;
