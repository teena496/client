import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { shades } from "../../theme";

export const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box backgroundColor={neutral.light} mt="70px" p="40px 0">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Explore our cloth shopping site for a curated collection of trendy
            and timeless fashion pieces, offering a seamless shopping experience
            with user-friendly navigation, secure payment options, and fast,
            reliable shipping.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography m="30px">Careers</Typography>
          <Typography m="30px">Our Stores</Typography>
          <Typography m="30px">Terms & Conditions</Typography>
          <Typography m="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer care
          </Typography>

          <Typography m="30px">Help Center</Typography>
          <Typography m="30px">Track your order</Typography>
          <Typography m="30px">Corporate & Bulk Purchasing</Typography>
          <Typography m="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" color={shades.secondary[500]} mb="30px">
            Contact Us
          </Typography>
          <Typography m="30px">Tuxedo Court, Scarborough, Ontario</Typography>
          <Typography m="30px">Email: ecommer@gmail.com</Typography>
          <Typography m="30px">Phone: (645)543-3454</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
