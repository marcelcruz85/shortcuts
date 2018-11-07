import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({

    media: {
      objectFit: 'cover',
    },
    root: {
      flexGrow: 1,
    },
    typography: {
      useNextVariants: true,
    },
  });
    
class ImgMediaCard extends React.Component{ 
  constructor(props) {
    super(props);
    this.shortcuts = [
        {id: 1, name: 'Sugar', url: 'https://sugar.consumerlaw.com', img: 'sugar.jpg'},
        {id: 2, name: 'Slack', url: 'https://consumerlawgroupllc.slack.com', img: 'slack.jpg'}, 
        {id: 3, name: 'Logics', url: 'https://clg.irslogics.com', img: 'logics.png'}, 
        {id: 4, name: 'Zendesk', url: 'https://yourclg.zendesk.com', img: 'zendesk.jpg'}, 
        {id: 5, name: 'Outlook', url: 'https://outlook.office.com/owa/', img: 'outlook.jpg'}, 
        {id: 6, name: 'NetDocs', url: 'https://vault.netvoyage.com/neWeb2/docCent.aspx', img: 'netdocs.jpg'}, 
        {id: 7, name: 'ImmPro', url: 'http://192.168.20.117', img: 'immpro.jpg'}, 
        // {id: 8, name: 'FLS', url: 'http://192.168.20.117', img: 'fls.png'}, 
        {id: 9, name: 'RapidFax', url: 'https://secure.rapidfax.com/UnifiedLogin.serv', img: 'rapidfax.jpg'}, 
        {id: 10, name: 'Paylocity', url: 'https://access.paylocity.com/', img: 'paylocity.jpg'}, 
        {id: 11, name: 'Intranet', url: 'http://office.yourclg.com', img: 'intranet.jpg'},
        {id: 12, name: 'Colab', url: 'http://colab.yourclg.com', img: 'colab.png'},
        {id: 13, name: 'Referrals', url: 'http://referrals.consumerlaw.com', img: 'referrals.jpg'},
    ]
  }
  render(){
    const { classes } = this.props;
    return (
        <Grid item xs={12} container spacing={40} direction="row" justify="center">
        
        
            {this.shortcuts.map((shorcut) =>
            <Grid item xs={4} sm={3} md={2} lg={1} key={shorcut.id} container justify="center"> 
                <Card className={classes.card} elevation={2}>
                <CardActionArea>
                    
                <a href={shorcut.url} className="no-underline">
                    <CardMedia
                    component="img"
                    className={classes.media}
                    height="70"
                    image={`/images/${shorcut.img}`} 
                    title={shorcut.name}
                    />
                    <Typography gutterBottom variant="h6" component="subtitle2">
                        {shorcut.name}
                    </Typography>
                </a> 
                </CardActionArea>
                </Card>            
            </Grid> 
            )}     
                        
        </Grid>
    )  
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);