import { useState } from "react";
import { filterPackages } from "../../../utils/appdata/getPackages";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import PackageBox from "../../../components/card/PackageBox";

const Package = () => {
  const [filters, setFilters] = useState({
    destination: "",
    tripGrade: "",
  });

  const filteredPackages = filterPackages(filters);

  return (
    <div>
      <Container sx={{ pt: "150px", minHeight: "100vh" }}>
        <Grid container spacing={2} sx={{ mb: "32px" }}>
          <Grid item xs={12}>
            <Typography sx={{ color: "white" }} variant="h4">
              OUR PACKAGES
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            sx={{ mr: 2 }}
            label="Destination"
            variant="outlined"
            value={filters.destination}
            onChange={(e) =>
              setFilters({ ...filters, destination: e.target.value })
            }
          />
          <TextField
            label="Trip Grade"
            variant="outlined"
            value={filters.tripGrade}
            onChange={(e) =>
              setFilters({ ...filters, tripGrade: e.target.value })
            }
          />
          {/* You can add more filters if needed */}
        </Box>

        {/* Display filtered packages */}
        <Grid container spacing={2}>
          {filteredPackages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PackageBox packageDetails={pkg} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Package;
