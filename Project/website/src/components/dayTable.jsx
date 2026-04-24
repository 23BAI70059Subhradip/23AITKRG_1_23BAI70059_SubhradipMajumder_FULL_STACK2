import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";
import Colors from "../constants/colors";

export default function DayTable({ data , limit = 6}) {

  const columns = [
    {
      field: "created_at",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "Type",
      headerName: "Type",
      flex: 1,
      headerAlign:"center", 
      align: "center",
      renderCell: (params) => {
        const isSell = params.value === "Sell";
        const color = isSell ? Colors.success : Colors.error;

        return (
          <Chip
            label={params.value?.toUpperCase() || "N/A"}
            size="small"
            sx={{
              backgroundColor: `${color}15`,
              color: color,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          />
        );
      },
    },
    {
      field: "revenue",
      headerName: "Revenue",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const isSell = params.row.Type === "Sell";
        const color = isSell ? Colors.success : Colors.error;

        return (
          <strong style={{ color }}>
            ₹ {params.value}
          </strong>
        );
      },
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
      <Box sx={{ height: 420 }}>
        <DataGrid
          rows={data || []}
          columns={columns}
          pageSizeOptions={[limit, 10, 20, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: limit, page: 0 },
            },
          }}
          disableRowSelectionOnClick
          sx={{
            border: "none",

            /* Remove header border completely */
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: 700,
              fontSize: "0.9rem",
            },

            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },

            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid rgba(255, 44, 44, 0.04)",
            },

            "& .MuiDataGrid-row": {
              transition: "all 0.2s ease",
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f5f7fa",
            },

            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
            },
          }}
        />
      </Box>
    </Box>
  );
}
