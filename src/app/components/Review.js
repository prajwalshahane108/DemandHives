"use client";
// import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";

// export default function TestimonialCard() {
//   return (
//     <Card
//       sx={{
//         maxWidth: "96.5%",
//         mx: "auto",
//         p: 9,
//         borderRadius: 3,
//         backgroundColor: "#F6F1FF",
//         boxShadow: "none",

//       }}
//     >
//       <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//         {[...Array(5)].map((_, index) => (
//           <StarIcon key={index} sx={{ color: "#6B3CD1" }} />
//         ))}
//       </Box>
//       <Typography
//         variant="h6"
//         sx={{ color: "#6B3CD1", fontSize: "1.25rem", fontWeight: 500 }}
//       >
//         “Spreadsheets were too static and didn’t work my business in real-time, so
//         <strong> it was a no-brainer to use</strong>
//         Recommend it enough!”
//       </Typography>
//       <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
//         <Avatar
//           src="/chris-kresser.jpg" // Update with correct image
//           alt="Chris Kresser"
//           sx={{ width: 48, height: 48, mr: 2 }}
//         />
//         <Box>
//           <Typography sx={{ fontWeight: "bold", color: "#3D2371" }}>
//             Chris Kresser
//           </Typography>
//           <Typography sx={{ color: "#9B8DBD" }}>Founder of Adapt Naturals</Typography>
//         </Box>
//       </Box>
//     </Card>
//   );
// }
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function TestimonialCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, 
      backgroundColor: "#fff",

     }}>
    <Card
      sx={{
        maxWidth: "96.5%",
        mx: "auto",
        pt: 10,
        pb: 10,
        pl: 35,
        pr: 35,
        borderRadius: 3,
        backgroundColor: "#F6F1FF",
        boxShadow: "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} sx={{ color: "#6B3CD1" }} />
        ))}
      </Box>
      <Typography
        variant="h6"
        sx={{ color: "#6B3CD1", fontSize: "1.25rem", fontWeight: 500 }}
      >
        “Spreadsheets were too static and didn’t work my business in real-time, so
        <strong> it was a no-brainer to use</strong>
        Recommend it enough!”
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <Avatar
          src="/chris-kresser.jpg" // Update with correct image
          alt="Chris Kresser"
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold", color: "#3D2371" }}>
            Chris Kresser
          </Typography>
          <Typography sx={{ color: "#9B8DBD" }}>Founder of Adapt Naturals</Typography>
        </Box>
      </Box>
    </Card>
    </Box>

  );
}
