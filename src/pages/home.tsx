import {
  Avatar,
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography
} from '@mui/material';

import Rocky from '../assets/images/rocky.png';
import Foxy from '../assets/images/foxy.png';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TextsmsIcon from '@mui/icons-material/Textsms';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useGetPosts } from '../api/posts';

const Home = () => {
  const { data, loading, error } = useGetPosts();
  console.log(data, loading, error, 'lala');
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 10 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              p: 3,
              border: '1px solid #ccc',
              borderRadius: 2,
              mb: 1
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch'
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

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1
              }}
            >
              <TextsmsIcon />
              <AddPhotoAlternateIcon />
              <VideoCameraBackIcon />
            </Box>
          </Box>

          <Typography variant="h6" sx={{ p: 2 }}>
            Today: {new Date().toDateString()}
          </Typography>

          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  p: 2,
                  borderTop: '1px solid #ccc',
                  borderBottom: '1px solid #ccc',
                  height: '100%'
                }}
              >
                I'm really tired today, my job search is going badly, I'm a bit
                frustrated about it. However, I'm trying to make the most of the
                situation that I have a lot of free time to do my own project.
                Something is something...
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 2,
                  position: 'relative',
                  border: '1px solid #ccc',
                  borderRadius: 2,
                  display: 'flex',
                  gap: 3,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: [60, -20],
                    top: [-15, 26],
                    width: 0,
                    height: 0,
                    borderTop: [
                      '15px solid transparent',
                      '10px solid transparent'
                    ],
                    borderRight: ['20px solid #ccc', '20px solid #ccc'],
                    borderBottom: [
                      '0px solid transparent',
                      '10px solid transparent'
                    ]
                  }
                }}
              >
                <Avatar
                  alt="Foxy"
                  src={Foxy}
                  sx={{ width: 80, height: 80, border: '4px solid #ccc' }}
                />

                <Typography variant="subtitle2">
                  Hey, good luck with that search. I can imagine how frustrating
                  it can be. Have you tried those new remote search sites like
                  Proxify and Arc? Maybe they can help you. That's great about
                  your personal project! Would you like to write a little more
                  about it? Maybe it will help you to externalize and look for
                  new ideas. I promise to try to help!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, md: 2 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
            p: 2
          }}
        >
          <Typography variant="h5">Alan</Typography>
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              p: 2,
              border: '1px solid #ccc',
              borderRadius: 2
            }}
          >
            <img src={Rocky} alt="placeholder" width="100%" />
          </Box>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
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
