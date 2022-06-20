import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { useRouter } from 'next/router';

export const ProjectCard = ({ project, ...rest }) => {
  const router = useRouter();

  function seeProject() {
    sessionStorage.setItem("project", project.projectName);
    sessionStorage.setItem("employerID", project.employerID);
    router.push('/specificProjectEmployee');
  };

  function RegisterHours() {
    sessionStorage.setItem("project", project.projectName);
    sessionStorage.setItem("employerID", project.employerID);
    router.push('/hour_registration');
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar>
            {getInitials(project.projectName)}
          </Avatar>
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {project.projectName}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {project.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-around' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
              onClick={seeProject}
            >
              More info
            </Button>
            <Button
              color="primary"
              display="inline"
              sx={{ pl: 1 }}
              onClick={RegisterHours}
            >
              Register hours
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};
