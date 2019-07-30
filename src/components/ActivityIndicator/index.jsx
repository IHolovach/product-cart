import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ActivityIndicator = ({ isLoading }) => (
  (isLoading)
    ? (
      <div className="activity-indicator activity-indicator-view
       activity-indicator-background activity-indicator-animation"
      />
    )
    : null
);


ActivityIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default ActivityIndicator;
