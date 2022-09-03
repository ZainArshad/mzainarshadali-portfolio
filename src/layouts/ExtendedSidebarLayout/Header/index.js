import { useContext } from 'react';

import {
  Box,
  alpha,
  lighten,
  IconButton,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Link from 'next/link';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? '0 1px 0 ' +
              alpha(lighten(theme.colors.primary.main, 0.7), 0.15) +
              ', 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)'
            : '0px 2px 8px -3px ' +
              alpha(theme.colors.alpha.black[100], 0.2) +
              ', 0px 5px 22px -4px ' +
              alpha(theme.colors.alpha.black[100], 0.1)
      }}
    >
      <Box
        sx={{
          width: '100%',
          justifyContent: 'space-evenly',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box>
          <Link href={'/'}>
            <IconButton
              sx={{
                background: `lightgrey`,
                borderRadius: '40px',
                p: 0.5,
                color: `${theme.sidebar.textColor}`,
                ml: 0.75,

                '&:hover': {
                  background: `rgb(255, 180, 0)`
                }
              }}
            >
              <Tooltip arrow title="Home">
                <HomeIcon />
              </Tooltip>
            </IconButton>
          </Link>
        </Box>

        <Box>
          <Link href={'/education-and-experience'}>
            <IconButton
              sx={{
                background: `lightgrey`,
                borderRadius: '40px',
                p: 0.5,
                color: `${theme.sidebar.textColor}`,
                ml: 0.75,

                '&:hover': {
                  background: `rgb(255, 180, 0)`
                }
              }}
            >
              <Tooltip arrow title="Education and Experience">
                <SchoolIcon />
              </Tooltip>
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link href={'/portfolio'}>
            <IconButton
              sx={{
                background: `lightgrey`,
                borderRadius: '40px',
                p: 0.5,
                color: `${theme.sidebar.textColor}`,
                ml: 0.75,

                '&:hover': {
                  background: `rgb(255, 180, 0)`
                }
              }}
            >
              <Tooltip arrow title="Portfolio">
                <BusinessCenterIcon />
              </Tooltip>
            </IconButton>
          </Link>
        </Box>
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
