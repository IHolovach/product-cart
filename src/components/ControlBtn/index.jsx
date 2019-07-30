import React from 'react';
import PropTypes from 'prop-types';

// import './style.css';

const ControlBtn = ({
  className,
  body,
  id,
  onClick,
}) => (
  <button
    type="button"
    data-id={id}
    className={`control-btn opacity-on-hover ${className}`}
    onClick={onClick}
  >
    {body}
  </button>
);

ControlBtn.propTypes = {
  className: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

ControlBtn.defaultProps = {
  className: '',
};

export default ControlBtn;
