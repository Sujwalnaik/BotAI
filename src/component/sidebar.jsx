import { useEffect, useState } from "react";
import { alpha, Grid, IconButton, Typography } from "@mui/material";
import { theme } from "../utils/theme";
import symbol from "../assets/symbol.png";
import editicon from "../assets/editicon.png";

// eslint-disable-next-line react/prop-types
function Sidebar({ RecieveLocalStorageData }) {
  const [storedItems, setStoredItems] = useState([]);
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();
  useEffect(() => {
    // Function to retrieve and set items from localStorage
    const updateStoredItems = () => {
      const keys = Object.keys(localStorage);
      const items = keys.map((key) => {
        const data = JSON.parse(localStorage.getItem(key));
        return {
          key,
          title: key.slice(0, 16), // or extract title from data if needed
          data,
        };
      });
      setStoredItems(items);
    };

    // // Retrieve stored items when component mounts
    updateStoredItems();

    // Event listener for localStorage changes
    window.addEventListener("storage", updateStoredItems);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateStoredItems);
    };
  }, []);

  const handleItemClick = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    RecieveLocalStorageData(data, key);
  };

  return (
    <>
      <Grid
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          rowGap: 3,
          overflow: "auto",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            bgcolor: theme.palette.primary.light,
            padding: "10px",
            position: "sticky",
            top: "0px",
          }}
        >
          <img src={symbol} alt="Symbol" style={{ borderRadius: "10px" }} />
          <Typography sx={{ fontSize: "20px" }}>New Chart</Typography>
          <IconButton>
            <img src={editicon} alt="EditIcon" />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            bgcolor: alpha(theme.palette.primary.light, 0.5),
            color: "#414146",
            padding: "10px",
            marginLeft: "30px",
            marginRight: "30px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            Past Conversation
          </Typography>
        </Grid>
        {storedItems.map((item) => (
          <Grid
            key={item.key}
            sx={{
              bgcolor: alpha(theme.palette.primary.light, 0.5),
              color: "#414146",
              padding: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "5px",
              textAlign: "center",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              cursor: "pointer", // Change cursor to pointer to indicate it's clickable
            }}
            onClick={() => handleItemClick(item.key)}
          >
            <Typography sx={{ fontFamily: theme.typography.primary }}>
              {item.title}
            </Typography>{" "}
            {/* Customize the title */}
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px" }}>{currentTime}</span>
              <span style={{ fontSize: "12px" }}>{currentDate}</span>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Sidebar;
