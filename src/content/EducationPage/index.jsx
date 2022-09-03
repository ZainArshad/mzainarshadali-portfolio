import { Typography, Grid, Box } from '@mui/material';

export default function EducationPageComponent() {
  return (
    <>
      <Box sx={{ m: 2.5 }}>
        <Grid container spacing={3}>
          <Box sx={{ textAlign: 'center', mt: 7, width: '100%', ml: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold !important',
                fontSize: '30px',
                fontFamily: 'Inter, sans-serif !important'
              }}
            >
              My Education and Certifications
            </Typography>
          </Box>
          <Grid item xs={12} sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="h3">
              Bachelor in Computer Sciences
              <Typography variant="h4">
                From National University of Computer and Emerging Sciences (FAST
                NU)
              </Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Front-End Web Development with React
              <Typography variant="h4">
                Coursera (Hong Kong University)
              </Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Server-side Development with NodeJS, Express and MongoDB
              <Typography variant="h4">
                Coursera (Hong Kong University)
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Box sx={{ textAlign: 'center', mt: 7, width: '100%', ml: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold !important',
                fontSize: '30px',
                fontFamily: 'Inter, sans-serif !important'
              }}
            >
              Working Experience with Organizations and Companies
            </Typography>
          </Box>
          <Grid item xs={12} sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="h3">
              Worked in Engin Technologies
              <Typography variant="h4">Pakistan (4 Months)</Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Worked with Josh Levy Labs
              <Typography variant="h4">United States (1 year)</Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Worked with Enerinvest
              <Typography variant="h4">United Kingdoms (6.5 months)</Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Worked with Datazymes
              <Typography variant="h4">India (1 month)</Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Worked with Eden Web
              <Typography variant="h4">Italy (1 month)</Typography>
            </Typography>
            <br />
            <Typography variant="h3">
              Worked with Raul Labs
              <Typography variant="h4">Spain (3 months)</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
