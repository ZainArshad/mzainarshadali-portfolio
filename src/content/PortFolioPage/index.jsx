import { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  Button,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Icon,
  Rating,
  Tooltip,
  Avatar
} from '@mui/material';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function VideoCard({ link, name = '' }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ width: '100%', height: '351px' }}>
        <CardContent sx={{ height: '5%', mb: 0.3 }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardMedia sx={{ width: '100%', height: '301px' }}>
          <iframe
            width="100%"
            height="100%"
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="1"
          ></iframe>
        </CardMedia>
      </Card>
    </Grid>
  );
}

export default function PortFolioPageComponent() {
  const [value, setValue] = useState(0);
  const [valueJs, setValueJs] = useState(0);
  const videos = [
    {
      link: 'https://drive.google.com/file/d/1xhMUaRgHidjbjXWgYd9-lXARCU9TysIE/preview',
      name: 'Data Zyme Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/103vOLpjS5yJeSmokrjCgSd38xe-_jzrs/preview',
      name: 'Global Terrorism Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1RTryDdwHKemzSJFxPTcQT7s5ridxhro9/preview',
      name: 'IMDB Movies Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1XVUGNdhBrSNp6Sp85Jv1IeM963EHRgou/preview',
      name: 'India Air Pollution Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1DDwzExXK0W6SruHiq1MjHCcFr3wgoQ18/preview',
      name: 'Soccer Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1ctHVbjoJkHdv7D75vBtvrq8FpL_5kYGn/preview',
      name: 'React D3 Template Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1lYYMkbu3zOqjl5BGqcu_C5vqYrfJV7Cq/preview',
      name: 'Visx Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1DrdFRldpNHWAj4RcBbpyuiGi4E_dsME_/preview',
      name: 'Basket Ball Distance Visualization'
    },
    {
      link: 'https://drive.google.com/file/d/1Gh1komI_UQJRXzezk4k8IWrP5GCQ8__k/preview',
      name: 'ICNL Tree Map Visualization'
    },
    {
      link: 'https://drive.google.com/file/d/1HZuK2vBSZomkk987ErFba_uhGJSZ_Tj7/preview',
      name: 'React Tree Node Visualization'
    },
    {
      link: 'https://drive.google.com/file/d/1p3ZZhezfCsweRO9oAeyykoj7gW0hpU00/preview',
      name: 'Compass Visualization'
    },
    {
      link: 'https://drive.google.com/file/d/1AY_UnmVfDrqWkT5TlSY_iix0GaQ4QARQ/preview',
      name: 'Custom Scatter and Custom Tooltip Visualization'
    },
    {
      link: 'https://drive.google.com/file/d/17CbMAv6zsMRw0eEae_PPJoyCc1XpXG2J/preview',
      name: 'Dynamic Growing Node Map Visualization'
    },
    {
      link: 'https://drive.google.com/file/d/1GHhtkiqGs_ufyU6e3XPGswp-XruiT0U6/preview',
      name: 'D3.js Dynamic Table'
    },
    {
      link: 'https://drive.google.com/file/d/1ntq2cAirk_K78QHc-G6QQfpeD6mby_J2/preview',
      name: 'US Map with Cities'
    },
    {
      link: 'https://drive.google.com/file/d/1xbbX5av7ZNGTSuNAzuG-Du945edXQGJU/preview',
      name: 'Custom Doughnut Chart'
    },
    {
      link: 'https://drive.google.com/file/d/18qru-uvgwEQ0Xr56ZkrIiAl2NEpuba7g/preview',
      name: 'Soccer Dashboard 2'
    },
    {
      link: 'https://drive.google.com/file/d/1vvwt1VQsGNm7n9WPPU7e6oCTLJKBh6Is/preview',
      name: 'Netflix Analysis Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1yUG2Dv55ucIUp0jQouccnlIdOgA72h0U/preview',
      name: 'Animated Double Doughnut Chart'
    },
    {
      link: 'https://drive.google.com/file/d/1_p6CDSE9FTPMqsBcQay22cVW8NOZX9CW/preview',
      name: 'Games Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1Zj68NPrNmrFq3Bj6cB4A9PfRUg4yT_tK/preview',
      name: 'Methand Emission Dashboard'
    }
  ];

  const highChartsVideos = [
    {
      link: 'https://drive.google.com/file/d/1djwcWDAjcPBYd9advigF7QY3tVhJnUdw/preview',
      name: 'Wind Barb Chart'
    },
    {
      link: 'https://drive.google.com/file/d/19za3R_lXTlEiBXpwnZfb6gcOFdZFQzX1/preview',
      name: 'Packed Bubble Chart'
    },
    {
      link: 'https://drive.google.com/file/d/1Sdxj6NBYUrIHhaZOq19dsrHkkv4olYmu/preview',
      name: 'Bar Chart'
    },
    {
      link: 'https://drive.google.com/file/d/12O5r3B3dkz4vVKpLY5gLGzh5IYeqqYfh/preview',
      name: 'Stack Bar Chart'
    },
    {
      link: 'https://drive.google.com/file/d/1cYQxydyVHkj8bIVCu3OZrk3cnBmwnfAh/preview',
      name: 'Stack Area Chart'
    },
    {
      link: 'https://drive.google.com/file/d/1BRVAK5gXhnbcel6qTR3-dDeIfRsRALlh/preview',
      name: 'Share Spot and Short Term Vs Total LNG Trade'
    },
    {
      link: 'https://drive.google.com/file/d/1HVsAbkbWxhKK2iDqwHSYZBsETTRwIZnW/preview',
      name: 'Liquefaction Capacity and LNG Trade'
    },
    {
      link: 'https://drive.google.com/file/d/18gmT8c9-Tl6fSjCmkU8FlB5lGguj4XAF/preview',
      name: 'Global LNG Trade'
    },
    {
      link: 'https://drive.google.com/file/d/1DjKUY4J-hYM5EX1z3FlHA4q875xALP6E/preview',
      name: 'Contracts Signed By Duration'
    }
  ];

  const chartJsVideos = [
    {
      link: 'https://drive.google.com/file/d/1GIoKn6wTE241YVpptXXQxSYeb8fk16mj/preview',
      name: 'Chartjs Dashboard with Custom Scrolling Effect'
    },
    {
      link: 'https://drive.google.com/file/d/1-ZG23zOZxQQ5DPDb4d8n5GLP4_ldBpeN/preview',
      name: 'React NFT Dashboard '
    },
    {
      link: 'https://drive.google.com/file/d/1FxcUsaSpVK8QQiQWcrEviLEs6dH0CBGv/preview',
      name: 'Abukai Dashboard'
    },
    {
      link: 'https://drive.google.com/file/d/1_nuuoumNCWpJfu30GhPQKU_2sjuCkJng/preview',
      name: 'Chartjs Dashboard Limit Passing'
    },
    {
      link: 'https://drive.google.com/file/d/1qlI12pL0cnrZwGVjR2DL4gReuOx2EYlu/preview',
      name: 'Tree Map'
    },
    {
      link: 'https://drive.google.com/file/d/1fPEXUmZeqn_SdHpcvxKUaYNPfBP_GWVM/preview',
      name: 'EnerInvest Chartjs Dashboard'
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeJs = (event, newValue) => {
    setValueJs(newValue);
  };
  return (
    <>
      <Box sx={{ m: 2.5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="disabled"
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 }
              },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Tab
              sx={{
                '&.Mui-selected': {
                  background: 'rgb(255, 180, 0) !important'
                },
                '&.MuiTabs-indicator': {
                  background: 'rgb(255, 180, 0) !important'
                }
              }}
              label="Web Apps"
            />
            <Tab
              label="Data Visualizations"
              sx={{
                '&.Mui-selected': {
                  background: 'rgb(255, 180, 0) !important'
                },
                '&.MuiTabs-indicator': {
                  background: 'rgb(255, 180, 0) !important'
                }
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ textAlign: 'center', mt: 7, width: '100%', ml: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold !important',
                fontSize: '30px',
                fontFamily: 'Inter, sans-serif !important'
              }}
            >
              Apps I have Worked On
            </Typography>
          </Box>
          <Grid container sx={{ mt: 5 }} spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={'https://telbee.io'}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  Telbee.io
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src="static/portfolio/telbee.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={'https://stage.si6ma.io'}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  Si6ma.io
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/si6ma.io.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={'https://lyceum.io'}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  Lyceum.io
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/lyceum.io.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }} spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={'https://icnl.org'}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  ICNL.org
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/icnl.org.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={'https://bnlimmobili.it/'}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  BNL IMMOBILI
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/bnlimmobili.it.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={''}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  UA Games
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/uagames.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }} spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={''}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  Crossroad
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/enerinvest.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 1 }}>
                <a
                  href={''}
                  target="_blank"
                  style={{ color: 'rgb(255, 180, 0)' }}
                >
                  Maestro Inteli Lense
                </a>
              </Typography>
              <Card>
                <CardMedia>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src="static/portfolio/maestro.png"
                  />
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tabs
            value={valueJs}
            onChange={handleChangeJs}
            variant="scrollable"
            indicatorColor="disabled"
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 }
              },
              display: 'flex',
              justifyContent: 'center',
              mb: 3
            }}
          >
            <Tab
              sx={{
                '&.Mui-selected': {
                  background: 'rgb(255, 180, 0) !important'
                },
                '&.MuiTabs-indicator': {
                  background: 'rgb(255, 180, 0) !important'
                }
              }}
              label="D3.js"
            />
            <Tab
              label="Chart.js"
              sx={{
                '&.Mui-selected': {
                  background: 'rgb(255, 180, 0) !important'
                },
                '&.MuiTabs-indicator': {
                  background: 'rgb(255, 180, 0) !important'
                }
              }}
            />
            <Tab
              label="HighCharts"
              sx={{
                '&.Mui-selected': {
                  background: 'rgb(255, 180, 0) !important'
                },
                '&.MuiTabs-indicator': {
                  background: 'rgb(255, 180, 0) !important'
                }
              }}
            />
          </Tabs>
          <TabPanel value={valueJs} index={0}>
            <Grid container spacing={3}>
              {videos.map((video) => {
                return <VideoCard link={video.link} name={video.name} />;
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={valueJs} index={1}>
            <Grid container spacing={3}>
              {chartJsVideos.map((video) => {
                return <VideoCard link={video.link} name={video.name} />;
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={valueJs} index={2}>
            <Grid container spacing={3}>
              {highChartsVideos.map((video) => {
                return <VideoCard link={video.link} name={video.name} />;
              })}
            </Grid>
          </TabPanel>
        </TabPanel>
      </Box>
    </>
  );
}
