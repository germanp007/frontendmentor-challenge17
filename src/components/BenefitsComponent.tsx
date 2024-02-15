import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
};

const BenefitsComponent: FC<Props> = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          sm: "left",
        },
        gap: 1,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
        <path
          fill="none"
          stroke="#10D8C4"
          strokeWidth="2"
          d="M1 4.134l1.907 1.908L7.949 1"
        />
      </svg>
      <Typography color="primary.lightText" fontSize={12}>
        {title}
      </Typography>
    </Box>
  );
};

export default BenefitsComponent;
