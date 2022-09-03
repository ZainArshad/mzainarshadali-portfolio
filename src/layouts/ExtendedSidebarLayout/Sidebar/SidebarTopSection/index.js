import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SidebarTopSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 2,
        pt: 1,
        mt: 3,
        position: 'relative'
      }}
    >
      <Avatar
        sx={{
          width: 125,
          height: 125,
          mb: 3,
          mx: 'auto'
        }}
        alt={'Muhammad Zain Arshad'}
        src={'image.jpeg'}
      />

      <Typography
        variant="h4"
        sx={{
          color: `${theme.sidebar.black}`,
          mb: 1
        }}
      >
        Muhammad Zain Arshad
      </Typography>
      <Typography variant="subtitle1">
        Front End and Data Visualization Developer
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 1.5 }}>
        {/* <Link
         
        > */}
        <IconButton
          href="https://www.linkedin.com/in/zain-arshad-032972199/"
          target="_blank"
          sx={{
            background: `steelblue`,
            borderRadius: '40px',
            p: 0.5,

            '&:hover': {
              background: `rgb(255, 180, 0)`
            }
          }}
        >
          <LinkedInIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton
          sx={{
            background: `rgb(28 185 111)`,
            borderRadius: '40px',
            p: 0.5,
            fontSize: '9px',
            color: 'white',
            ml: 0.75,

            '&:hover': {
              background: `rgb(255, 180, 0)`
            }
          }}
          href="https://www.fiverr.com/zainarshadd"
          target="_blank"
        >
          Fiverr
        </IconButton>
        <IconButton
          sx={{
            background: `rgb(19 163 0)`,
            borderRadius: '40px',
            p: 0.5,
            fontSize: '7px',
            color: 'white',
            ml: 0.75,

            '&:hover': {
              background: `rgb(255, 180, 0)`
            }
          }}
          href="https://www.upwork.com/freelancers/~013db2003ba03d257d"
          target="_blank"
        >
          Upwork
        </IconButton>
      </Box>
    </Box>
  );
}

export default SidebarTopSection;
