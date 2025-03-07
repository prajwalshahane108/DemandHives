"use client"
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import EditIcon from "@mui/icons-material/Edit"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

// Custom styled components
const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fef8f8",
  padding: theme.spacing(8, 0),
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}))

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  fontFamily: "syne",
  color: "#473077",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const HighlightText = styled("span")({
  color: "#8a56ff",
  fontFamily: "syne",
})

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7a4dff",
  color: "white",
  padding: "12px 32px",
  borderRadius: "30px",
  fontSize: "1.2rem",
  fontFamily: "syne",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#7442ff",
  },
}))

const OrderInterface = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  border: "2px solid #8a56ff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  overflow: "hidden",
}))

const InterfaceHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}))

const StyledStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& .MuiStepLabel-root": {
    flexDirection: "column",
  },
  "& .MuiStepLabel-label": {
    marginTop: theme.spacing(1),
  },
}))

export default function Home() {
  const steps = ["Pre-Production", "Production", "Pre-Shipment", "Shipment"]

  return (
    <MainContainer sx={{ margin: 3, borderRadius: 4 }}
      id="Purchase"
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box>
              <MainHeading variant="h1">
                <HighlightText> Streamline </HighlightText>
                Your Procurement Process
              </MainHeading>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#5a3b9c",
                  fontSize: "1.2rem",
                  fontFamily: "Space Grotesk",
                  lineHeight: 1.6,
                }}
              >
                Create and submit purchase orders in minutes with precision.
                <br />
                Get personalized supplier recommendations and ensure timely restocking—effortlessly.

              </Typography>

              <StyledButton variant="contained" size="large">
                Simplify Ordering Now
              </StyledButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="video"
                src="/logi.mp4"
                autoPlay
                loop
                muted
                sx={{
                  width: "100%",
                  maxWidth: 700,
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
              />
            </Box>

          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  )
}

