import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Country = ({country}) => {
    const {name , capital ,flag ,population, region} = country
    const classes = useStyles();
    return (
        <div>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant ="contained" size="small" color="primary">
        Region :  {region}
        </Button>
        <Button variant ="contained" size="small" color="secondary">
          Population : {population}
        </Button>
      </CardActions>
    </Card> 
        </div>
    );
};

export default Country;