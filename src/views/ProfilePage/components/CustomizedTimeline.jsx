import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import PropTypes from 'prop-types';
import React from 'react';

const CustomizedTimeline = ({ data }) => {
  const dataLength = data && data.length > 0 ? data.length - 1 : 0;
  return (
    <Timeline>
      {data &&
        data.map(({ left: { title, description }, icon, right }, index) => (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant='h6' component='h1'>
                {title}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                {description}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>{icon}</TimelineDot>
              {dataLength > 0 && index < dataLength && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6' component='h1'>
                {right.title}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                {right.description}
              </Typography>
              {right.links &&
                right.links.map(({ label, linkTo }) => (
                  <Typography variant='body2' color='textSecondary'>
                    <a target='_blank' rel='noreferrer' href={linkTo}>
                      {label}
                    </a>
                  </Typography>
                ))}
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

CustomizedTimeline.defaultProps = {
  data: null,
};

CustomizedTimeline.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CustomizedTimeline;
