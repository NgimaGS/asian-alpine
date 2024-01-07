// PackageBox.tsx
import React from "react";

import { Typography, Paper, Grid } from "@mui/material";
import { PackageData } from "../../utils/data/packages";
import { Link } from "react-router-dom";

interface PackageBoxProps {
  packageDetails: PackageData;
}

const PackageBox: React.FC<PackageBoxProps> = ({ packageDetails }) => {
  return (
    <Link to="/destination/package" style={{ textTransform: "none" }}>
      <Paper
        className="service-card"
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(${packageDetails?.imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "300px", md: "200px" },
        }}
      >
        <Grid container spacing={2} sx={{ position: "absolute", bottom: 10 }}>
          <Grid item xs={12} className="service-title">
            <Typography color="text.primary" sx={{ fontWeight: 600 }}>
              {packageDetails?.name}
            </Typography>
          </Grid>
          <Grid item xs={12} className="service-content">
            <Typography
              sx={{
                pr: "8px",
                fontSize: "14px",
              }}
            >
              Duration:
            </Typography>
            <Typography
              sx={{
                pr: "8px",
                fontSize: "14px",
              }}
            >
              Trip Grade: {packageDetails?.tripGrade}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default PackageBox;
