import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import ConvertAllDatatoMonthly from "../utils/convertAllDatatoMonthly";
import Colors from "../constants/colors";

export default function MonthlyTable({ data }) {

  const [monthlyData, setMonthlyData] = React.useState([]);
  const mainColor = Colors.primary;

  useEffect(() => {
    const md = ConvertAllDatatoMonthly(data);

    const formatted = Object.entries(md).map(
      ([month, revenue], index) => ({
        id: index + 1, // DataGrid needs id
        month,
        revenue,
      })
    );

    setMonthlyData(formatted);
  }, [data]);

  const columns = [
    {
      field: "month",
      headerName: "Month",
      flex: 1,
    },
    {
      field: "revenue",
      headerName: "Revenue",
      type: "number",
      flex: 1,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => (
        <strong style={{ color: mainColor }}>
          ₹ {params.value}
        </strong>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        mt: 3,
        borderRadius: 4,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* Top Accent Strip */}
      <Box
        sx={{
          height: "6px",
          width: "100%",
          backgroundColor: mainColor,
        }}
      />

      <Box sx={{ height: 420 }}>
        <DataGrid
          rows={monthlyData}
          columns={columns}
          pageSizeOptions={[7, 12]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 6, page: 0 },
            },
          }}
          disableRowSelectionOnClick
          sx={{
            border: "none",

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: 700,
              borderBottom: "none",
            },

            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },

            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid rgba(0,0,0,0.04)",
            },

            "& .MuiDataGrid-row": {
              transition: "all 0.2s ease",
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f5f7fa",
            },

            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#fafafa",
            },
          }}
        />
      </Box>
    </Box>
  );
}
