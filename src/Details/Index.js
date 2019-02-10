import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// map over props.issue.authors
const createList = () => {
  const authorsList = ['Jason Aaron', 'Eve Ewing', 'Kelly Thompson'].map(author => {
    return(
      <ListItem>
        <ListItemText primary={author}/>
      </ListItem>)
  });
  return authorsList;
}

const Details = (props) => {
  return(
    <Card
      style={{display: 'flex'}}>
      <CardMedia
        component='img'
        style={{height: '500px', width: '40%'}}
        image={'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/664758/664758._SX1280_QL80_TTD_.jpg'}
        />
      <CardContent
        style={{width: '60%'}}>
        <Typography
          variant='h2'
          style={{display: 'flex', justifyContent: 'space-around'}}>
            <span className="issue-series-title">Series Title</span>
            <span className="issue-number">#N</span>
        </Typography>
        <Typography
          variant='h5'>
          LGY#NNN
        </Typography>
        <Typography
          variant='h3'>
          Book Title
        </Typography>
        <Typography
          variant='h3'>
          Issue Title
        </Typography>
        <div className='issue-authors-container' style={{display: 'flex', justifyContent: 'space-around'}}>
          <Typography
            variant='h4'>
            Author(s):
          </Typography>
          <List dense={true}>
            {createList()}
          </List>
        </div>
        <div className='issue-artists-container' style={{display: 'flex', justifyContent: 'space-around'}}>
          <Typography
            variant='h4'>
            Artist(s):
          </Typography>
          <List dense={true}>
            {createList()}
          </List>
        </div>
        <Typography
          variant='h5'
          style={{display: 'flex', justifyContent: 'space-around'}}>
          <span className='issue-pub-date-label'>Publication Date:</span>
          <span className='issue-pub-date'>October 2019</span>
        </Typography>
        <Typography
          variant='h5'
          style={{display: 'flex', justifyContent: 'space-around'}}>
          <span className='issue-publisher-label'>Publisher:</span>
          <span className='issue-publisher'>Marvel</span>
        </Typography>
        <Typography
          variant='h5'
          style={{display: 'flex', justifyContent: 'space-around'}}>
          <span className='issue-barcode-label'>Barcode:</span>
          <span className='issue-barcode'>00111</span>
        </Typography>
      </CardContent>
    </Card>
  );
};


export default Details;
