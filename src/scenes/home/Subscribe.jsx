import {
  Box,
  Icon,
  IconButton,
  InputBase,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { shades } from "../../theme";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and recieve $20 coupon for your first order when you checkout{" "}
      </Typography>
      <Box
        backgroundColor="#F2F2F2"
        display="flex"
        alignItems="center"
        p="4px 4px"
        m="15px auto"
      >
        <InputBase
          sx={{ ml: "2", flex: "1" }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button sx={{ backgroundColor: shades.neutral[500] }}>Subscribe</Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
