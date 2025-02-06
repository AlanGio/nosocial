import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography
} from '@mui/material';

import Rocky from '../assets/images/rocky.png';
import Foxy from '../assets/images/foxy.png';

const Home = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 1
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="What do you want to day today?"
              multiline
              maxRows={4}
              sx={{ flexGrow: 20 }}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Post it
            </Button>
          </Box>

          <Typography variant="h6" sx={{ pt: 2 }}>
            {new Date().toDateString()}
          </Typography>

          <Grid container spacing={4}>
            <Grid size={8}>
              <Box>
                We all like to dream about the future and all of the
                possibilities and potential it holds. While setting goals and
                pushing forward to achieve them is a crucial component of
                creating the future you envision for yourself, it’s all too easy
                to become fixated on what can be, instead of what is. Becoming
                so focused on the future that you can’t appreciate what you
                already have in the present is a dangerous mindset to be in. For
                tomorrow, next month, and next year are never promised. We must
                learn how to dream for tomorrow while still enjoying what today
                has to offer us, which is certainly easier said than done. A few
                simple steps to walk through as you learn to embrace today’s
                happiness: Step 1: Come to terms with what happiness is not
                Happiness is not: a new car a trip to the Bahamas a six figure
                income a huge house with a wrap-around porch
              </Box>
            </Grid>
            <Grid size={4}>
              <img src={Foxy} alt="placeholder" width="100%" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src={Rocky} alt="placeholder" width="100%" />
          <Typography variant="h5">Alan</Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            German Sheppard lover. I love to play fetch and go for long walks.
            Musician, I play the guitar and the piano. I love to play fetch and
            go for long walks.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid size={8}></Grid>
        <Grid size={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
