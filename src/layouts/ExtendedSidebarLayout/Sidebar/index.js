import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';

import {
  Box,
  Drawer,
  styled,
  Divider,
  useTheme,
  Typography,
  LinearProgress,
  linearProgressClasses
} from '@mui/material';

import SidebarTopSection from './SidebarTopSection';
import ThemeSettings from 'src/components/ThemeSettings';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        position: relative;
        z-index: 7;
        height: 100%;
        margin-left:0.1%;
        background-color:${theme.sidebar.background};
        margin-bottom:15px;
        
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  const arr = [
    { name: 'ReactJS', value: 95 },
    { name: 'NextJS', value: 90 },
    { name: 'NodeJS', value: 80 },
    { name: 'D3.js', value: 95 },
    { name: 'Chart.js', value: 95 },
    { name: 'HighCharts', value: 85 },
    { name: 'HTML', value: 95 },
    { name: 'JavaScript', value: 90 },
    { name: 'CSS', value: 90 },
    { name: 'Jquery', value: 85 }
  ];

  const LinearProgressInfo = styled(LinearProgress)(
    ({ theme }) => `
          height: 8px;
          border-radius: ${theme.general.borderRadiusLg};

          &.${linearProgressClasses.colorPrimary} {
           
            background-color: ${theme.colors.alpha.trueWhite[30]};
            border: 1px solid rgb(255, 180, 0);
        }
          
          & .${linearProgressClasses.bar} {
              margin-top:1.5px;
              margin-bottom:1.5px;
              border-radius: ${theme.general.borderRadiusLg};
              background-color: rgb(255, 180, 0);
          }
      `
  );

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          boxShadow: theme.sidebar.boxShadow
        }}
      >
        <Scrollbar>
          <ThemeSettings></ThemeSettings>
          <SidebarTopSection />
          <Divider
            sx={{
              my: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.black[21]
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: `${theme.sidebar.textColor}`,
              mb: 1,
              ml: 1
            }}
          >
            Skills
          </Typography>
          {arr.map((val, i) => {
            return (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: i > 0 ? 1.1 : 2.1
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: `${theme.sidebar.textColor}`,
                      mb: 1,
                      ml: 1
                    }}
                  >
                    {val.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: `${theme.sidebar.textColor}`,
                      mb: 1,
                      mr: 1.1
                    }}
                  >
                    {val.value + '%'}
                  </Typography>
                </Box>
                <Box width={'85%'} sx={{ display: 'block', margin: 'auto' }}>
                  <LinearProgressInfo variant="determinate" value={val.value} />
                </Box>
              </>
            );
          })}
          {/* <SidebarFooter /> */}
        </Scrollbar>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            boxShadow: theme.sidebar.boxShadow
          }}
        >
          <Scrollbar>
            <ThemeSettings></ThemeSettings>
            <SidebarTopSection />
            <Divider
              sx={{
                my: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.black[21]
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: `${theme.sidebar.textColor}`,
                mb: 1,
                ml: 1
              }}
            >
              Skills
            </Typography>
            {arr.map((val, i) => {
              return (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: i > 0 ? 1.1 : 2.1
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: `${theme.sidebar.textColor}`,
                        mb: 1,
                        ml: 1
                      }}
                    >
                      {val.name}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: `${theme.sidebar.textColor}`,
                        mb: 1,
                        mr: 1.1
                      }}
                    >
                      {val.value + '%'}
                    </Typography>
                  </Box>
                  <Box width={'85%'} sx={{ display: 'block', margin: 'auto' }}>
                    <LinearProgressInfo
                      variant="determinate"
                      value={val.value}
                    />
                  </Box>
                </>
              );
            })}
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
