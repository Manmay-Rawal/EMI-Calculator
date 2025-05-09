import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Box,Typography,Grid } from "@mui/material";

const columns = [
  { id: "currency", label: "Currency", minWidth: 170 },
  {
    id: "rate",
    label: "Rate",
    minWidth: 170,
    align: "right",
    format: (value) =>
      value.toLocaleString("en-US", { maximumFractionDigits: 4 }),
  },
];

// Helper to create row data
function createData(currency, rate) {
  return { currency, rate };
}

const ExchangeRate = () => {
  const [rateData, setRateData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_EXCHANGE_API_KEY
          }/latest/USD`
        );
        const rates = response.data.conversion_rates;
        const rows = Object.entries(rates).map(([currency, rate]) =>
          createData(currency, rate)
        );
        setRateData(rows);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!rateData.length) {
    return <div>Loading exchange rates...</div>;
  }

  return (
    <Box>
      <Grid>
        <Typography sx={{ mt: 4, fontSize: "1.75rem", mb: 2 }}>
        Live Exchange Rates (Base: USD)
        </Typography>
      </Grid>
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="exchange rate table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rateData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.currency}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rateData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  );
};

export default ExchangeRate;
