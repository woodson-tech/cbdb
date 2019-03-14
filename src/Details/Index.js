import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import detailsStyles from './styles';

// map over arrays in props
const createList = (listArray) => {
  return listArray.map((item, index) => {
    return(
      <ListItem key={index}
                style={detailsStyles.issueDetailListItem} >
        <ListItemText primary={item}
                      disableTypography={true}
                      style={detailsStyles.issueDetailListItemText} />
      </ListItem>)
  });
}

const formatDate = (yearMonthDate) => {
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
  const monthNum = yearMonthDate.substring(yearMonthDate.length-2);
  let monthName = months[monthNum];
  const year = yearMonthDate.substring(0, 4);

  return `${monthName} ${year}`;
}

const Details = (props) => {
  return(
    <Card
      style={detailsStyles.card}>
      <CardMedia
        component='img'
        style={detailsStyles.issueImage}
        image={'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/664758/664758._SX1280_QL80_TTD_.jpg'}
        />
      <CardContent
        style={detailsStyles.issueDetailsSection}>
        <div className='issue-titles-container'
             style={detailsStyles.issueTitlesContainer} >
          <div style={detailsStyles.issueTitlesTopRow} >
            <h1 style={detailsStyles.issueSeriesTitle}>{props.issue.series_title}</h1>
            <div className='issue-num-container'
                  style={detailsStyles.issueNumbersContainer} >
              <p style={detailsStyles.issueNumber} >
                {`#${props.issue.number}`}
              </p>
              {
                props.issue.legacy_number &&
                <p style={detailsStyles.issueNumberLegacy}>
                  {`LGY#${props.issue.legacy_number}`}
                </p>
              }
            </div>
          </div>
          {props.issue.book_title &&
            <h2 style={detailsStyles.issueSubTitles} >
              {props.issue.book_title}
            </h2>
          }
          {props.issue.issue_title &&
            <h2 style={detailsStyles.issueSubTitles} >
              {props.issue.issue_title}
            </h2>
          }
        </div>
        <div className='issue-details-container'
             style={detailsStyles.issueDetailsContainer} >
          <div className='issue-detail issue-authors-container' 
               style={detailsStyles.issueDetailItemContainer} >
            <h3 style={detailsStyles.issueDetailLabel} >Author(s):</h3>
            <List style={detailsStyles.issueDetailList} >
              {createList(props.issue.writers)}
            </List>
          </div>
          <div className='issue-detail issue-artists-container' 
               style={detailsStyles.issueDetailItemContainer} >
            <h3 style={detailsStyles.issueDetailLabel} >Artist(s):</h3>
            <List style={detailsStyles.issueDetailList} >
              {createList(props.issue.artists)}
            </List>
          </div>
          <div className='issue-detail issue-date-container' 
               style={detailsStyles.issueDetailItemContainer} >
            <h3 style={detailsStyles.issueDetailLabel} >Publication Date:</h3>
            <p style={detailsStyles.issueDetail} >{formatDate(props.issue.date)}</p>
          </div>
          <div className='issue-detail issue-publisher-container' 
               style={detailsStyles.issueDetailItemContainer} >
            <h3 style={detailsStyles.issueDetailLabel} >Publisher:</h3>
            <p style={detailsStyles.issueDetail} >{props.issue.publisher}</p>
          </div>
          {props.issue.barcode &&
            <div className='issue-detail issue-barcode-container' 
                 style={detailsStyles.issueDetailItemContainer} >
              <h3 style={detailsStyles.issueDetailLabel} >Barcode:</h3>
              <p style={detailsStyles.issueDetail} >{props.issue.barcode}</p>
            </div>
          }
          {props.issue.notes &&
            <div className='issue-detail issue-notes-container'
                 style={detailsStyles.issueDetailItemContainer} >
              <h3 style={detailsStyles.issueDetailLabel} >Notes:</h3>
              <p style={detailsStyles.issueDetail} >{props.issue.notes}</p>
            </div>
          }
        </div>
      </CardContent>
    </Card>
  );
};


export default Details;
