import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function TemperatureCard(props) {
  const { classes } = props;
    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.title} 
            </Typography>
            <Typography variant="h5" component="h2">
            {props.temperature}&deg;C
            </Typography>
            <Typography component="p">
                Updated: {props.updated}
            </Typography>
          </CardContent>
        </Card>
      );
}

TemperatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemperatureCard);