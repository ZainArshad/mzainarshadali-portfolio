import {
  Typography,
  Grid,
  Box,
  Button,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Icon,
  Rating,
  Tooltip,
  Avatar
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import LayersIcon from '@mui/icons-material/Layers';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps';
import Carousel from 'react-material-ui-carousel';

function CarouselSlider(props) {
  var items = [
    {
      value: [
        {
          name: 'Joshua Levy',
          comments: 'Zain is a magician!! Great to work with',
          place: 'Fiverr'
        },
        {
          name: 'Saazidar',
          comments:
            'Great communication with seller, extra fast delivery. Recommend!',
          place: 'Fiverr'
        },
        {
          name: 'Katrin',
          comments:
            'Zain Arshad is very professional, knowledgeable and a great communicator. Project was delivered on time and all the tasks were completed as promised. Will definitely work with him again!',
          place: 'Fiverr'
        }
      ]
    },
    {
      value: [
        {
          name: 'Holman Gonzalo',
          comments:
            'Zain was working great! I will definitely resume this contract once my customer gets back to me. Thank you!',
          place: 'Upwork'
        },
        {
          name: 'Chris Rani',
          comments:
            'Great person and very cooperative. A great experience of working with him. Would love to work again',
          place: 'Upwork'
        },
        {
          name: 'Deepthi Kodatham',
          comments:
            'Zain Arshad did an excellent job and much under the estimated time. He is very honest in his estimation and would definitely recommend him to anyone who is looking for a seasoned D3/JS developer.',
          place: 'Upwork'
        }
      ]
    }
  ];

  return (
    <Carousel height={'auto'}>
      {items.map((item, i) => (
        <Grid container spacing={2}>
          <Item key={i} item={item} />
        </Grid>
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <>
      {item.value.map((it) => {
        return (
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ height: { xs: 'auto', sm: '405px', md: '301px' } }}>
              <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
              >
                <Avatar sx={{ width: 80, height: 80 }} />
              </CardMedia>
              <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h3">{it.name}</Typography>
                <Rating name="read-only" value={5} readOnly />
                <br />
                <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
                  {it.comments}
                </Typography>
                <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
                  {it.place}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default function HomePageComponent() {
  const theme = useTheme();
  const geoUrl = '/features.json';
  const data = [
    { id: 'Pakistan', value: 1 },
    { id: 'Saudi Arabia', value: 1 },
    { id: 'India', value: 1 },
    { id: 'Philippines', value: 1 },
    { id: 'Japan', value: 1 },
    { id: 'Australia', value: 1 },
    { id: 'United States', value: 1 },
    { id: 'Germany', value: 1 },
    { id: 'United Kingdom', value: 1 },
    { id: 'Canada', value: 1 },
    { id: 'West Bank', value: 1 },
    { id: 'Chile', value: 1 },
    { id: 'United Arab Emirates', value: 1 },
    { id: 'Slovenia', value: 1 },
    { id: 'France', value: 1 },
    { id: 'Belgium', value: 1 },
    { id: 'Mexico', value: 1 },
    { id: 'Austria', value: 1 },
    { id: 'Colombia', value: 1 },
    { id: 'Singapore', value: 1 },
    { id: 'Spain', value: 1 },
    { id: 'Italy', value: 1 }
  ];

  return (
    <>
      {/* <Scrollbar> */}
      <Grid container sx={{ overflowX: 'hidden' }}>
        <Grid item md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              m: 2
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: '800 !important',
                fontSize: { md: '47px', sm: '35px', xs: '30px' },
                fontFamily: 'Inter, sans-serif !important'
              }}
            >
              I’m Muhammad Zain Arshad
              <br />
              <span style={{ color: 'rgb(255, 180, 0)' }}>
                Font – End and Data Visualization
              </span>{' '}
              Developer
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              width: '100%',
              m: 2
            }}
          >
            <Typography variant="h3">
              I’m
              <span style={{ color: 'rgb(255, 180, 0)' }}> Top Rated</span>{' '}
              Freelancer at{' '}
              <span style={{ color: 'rgb(19 163 0)' }}>Upwork</span>
              <br />
              I’m{' '}
              <span style={{ color: 'rgb(255, 180, 0)' }}>
                Second Level
              </span>{' '}
              Seller at <span style={{ color: 'rgb(28 185 111)' }}>Fiverr</span>
            </Typography>
          </Box>
          <Button
            disabled
            // size={{ md: 'large', sm: 'medium', xs: 'small' }}
            sx={{
              background: 'rgb(255, 180, 0)',
              color: `${theme.sidebar.textColor} !important`,
              width: '125px',
              pt: 2.1,
              pb: 2.1,
              fontSize: '21px',
              ml: 2
            }}
          >
            Hire Me
          </Button>
        </Grid>
      </Grid>
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
              My Services
            </Typography>
          </Box>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ height: '325px' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Icon sx={{ width: '100%', height: '50%' }}>
                  <WebIcon sx={{ fontSize: 180, color: 'rgb(255, 180, 0)' }} />
                </Icon>
                <Typography variant="h3">Simple Web Development</Typography>
                <Typography variant="subtitle">
                  HTML, CSS, JavaScript, JQuery
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ height: '325px' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Icon sx={{ width: '100%', height: '50%' }}>
                  <LayersIcon
                    sx={{ fontSize: 180, color: 'rgb(255, 180, 0)' }}
                  />
                </Icon>
                <Typography variant="h3">Full Stack Development</Typography>
                <Typography variant="subtitle">
                  ReactJs, NextJs, NodeJs, MongDb, PostgreSql, MySql
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ height: '325px' }}>
              <CardContent sx={{ textAlign: 'center', height: '100%' }}>
                <Icon sx={{ width: '100%', height: '65%' }}>
                  <QueryStatsIcon
                    sx={{ fontSize: 180, color: 'rgb(255, 180, 0)' }}
                  />
                </Icon>
                <Typography variant="h3">
                  Data Visualization and Dashboards
                </Typography>
                <Typography variant="subtitle">
                  D3Js, ChartJs, HighCharts, ApexChart, ReChart
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Box sx={{ textAlign: 'center', mt: 7, width: '100%' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold !important',
                fontSize: '30px',
                fontFamily: 'Inter, sans-serif !important'
              }}
            >
              Customers Served Around The Globe
            </Typography>
          </Box>
          <Grid item xs={12}>
            <ComposableMap
              projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 147
              }}
            >
              <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
              <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
              {data.length > 0 && (
                <Geographies geography={geoUrl}>
                  {({ geographies }) => {
                    return geographies.map((geo) => {
                      const d = data.find((s) => s.id === geo.properties.name);
                      //   console.log('786 d', d);
                      return (
                        <Tooltip arrow title={geo.properties.name}>
                          <Geography
                            key={geo.id}
                            geography={geo}
                            fill={d ? 'rgb(255, 180, 0)' : 'lightgrey'}
                          />
                        </Tooltip>
                      );
                    });
                  }}
                </Geographies>
              )}
            </ComposableMap>
          </Grid>
        </Grid>
        {/* </Scrollbar>*/}
        <Box sx={{ textAlign: 'center', mt: 7, width: '100%', mb: 3 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold !important',
              fontSize: '30px',
              fontFamily: 'Inter, sans-serif !important'
            }}
          >
            Recommendations
          </Typography>
        </Box>
        <CarouselSlider />
      </Box>
    </>
  );
}
