import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box
} from "@mui/material";
import Colors from "../constants/colors";

export default function RevenueCard({ title, revenue, type }) {

  const mainColor = Colors[type];

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",

        "&:hover": {
          // transform: "translateY(-8px)",
          backdropFilter: "blur(14px)",
          background: `linear-gradient(
            135deg,
            ${mainColor}22,
            rgba(255,255,255,0.7)
          )`,
          border: `1px solid ${mainColor}55`,
          boxShadow: `0 12px 40px ${mainColor}33`,
        }
      }}
    >


      <CardHeader
        title={
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="text.secondary"
          >
            {title}
          </Typography>
        }
        sx={{ pb: 0 }}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: mainColor,
              letterSpacing: 0.5,
            }}
          >
            ₹ {revenue}
          </Typography>
        </Box>
      </CardContent>

      {/* Top Accent Bar */}
      <Box
        sx={{
          height: "6px",
          width: "100%",
          backgroundColor: mainColor,
        }}
      />
    </Card>
  );
}
