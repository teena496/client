import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";

export const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  const [items, setItems] = useState([]);

  const [ItemDetails, setItemDetails] = useState([]);

  const getItem = async () => {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  };

  const getItems = async () => {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  };

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.attributes?.Name}
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* ACTIONS */}
        <Box flex="1 1 50%" width="50%">
          Description
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.Name}</Typography>
            <Typography variant="h3">${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription &&
                item?.attributes?.longDescription[0].children[0].text}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[300]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              onClick={() => dispatch(addToCart({ ...item, count }))}
              sx={{ backgroundColor: shades.primary[500], color: "white" }}
            >
              ADD TO CART
            </Button>
          </Box>{" "}
          <Box p="10px 0">
            <Button
              onClick={() => dispatch(addToCart({ ...item, count }))}
              sx={{ backgroundColor: shades.secondary[300], color: "white" }}
            >
              <FavoriteBorderOutlinedIcon />
              ADD TO WISHLIST
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
