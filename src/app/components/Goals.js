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
  fontSize: "3.5rem",
  fontWeight: 700,
  color: "#5a3b9c",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const HighlightText = styled("span")({
  color: "#8a56ff",
})

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#8a56ff",
  color: "white",
  padding: "12px 32px",
  borderRadius: "30px",
  fontSize: "1.2rem",
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
    <MainContainer sx={{ margin: 3, borderRadius: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box>
              <MainHeading variant="h1">
                Place purchase orders <HighlightText>faster than ever</HighlightText>
              </MainHeading>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#5a3b9c",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                }}
              >
                Build ready-to-submit POs in mere minutes.
                <br />
                All with spot-on accuracy thanks to
                <br />
                personalized restock recommendations.
              </Typography>

              <StyledButton variant="contained" size="large">
                Start for free
              </StyledButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <OrderInterface>
              <InterfaceHeader>
                <Typography variant="h6">Orders</Typography>
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              </InterfaceHeader>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    WHEELS
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2" color="textSecondary">
                      Destination: Cogsy UK
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }} />
                  <Button variant="outlined" size="small" endIcon={<KeyboardArrowDownIcon />} sx={{ mr: 1 }}>
                    Pre-Production
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ backgroundColor: "#8a56ff" }}
                  >
                    Add Single Shipment
                  </Button>
                </Box>
              </Box>

              <StyledStepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="body2">{label}</Typography>
                        {label === "Pre-Production" && (
                          <Typography variant="caption" color="textSecondary">
                            PO accepted
                            <br />
                            31.05.2023
                          </Typography>
                        )}
                        {label === "Production" && (
                          <TextField
                            size="small"
                            placeholder="dd/mm/yyyy"
                            variant="outlined"
                            sx={{ mt: 1, width: "120px" }}
                          />
                        )}
                      </Box>
                    </StepLabel>
                  </Step>
                ))}
              </StyledStepper>

              <Box sx={{ bgcolor: "#5a3b9c", p: 2, borderRadius: 1, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Recommendations for
                  </Typography>
                  <KeyboardArrowDownIcon sx={{ color: "white" }} />
                  <Box sx={{ flex: 1 }} />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    All locations
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Purchase order for HOT WHEELS
              </Typography>

              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>On Hand / Target</TableCell>
                      <TableCell>Recommended</TableCell>
                      <TableCell>In Transit</TableCell>
                      <TableCell>Order Unit</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Unit Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </OrderInterface>
          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  )
}

