import React, { useState } from "react";
import { Typography, Box, Pagination } from "@mui/material";

const itemsPerPage = 5;
const data = Array.from({ length: 20 }, (_, index) => index + 1);

const MyPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box sx={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Paginated List
      </Typography>
      <ul>                                            
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>                      
              
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default MyPagination;
