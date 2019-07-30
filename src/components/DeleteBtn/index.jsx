import React from 'react';
import PropTypes from 'prop-types';

import deleteIcon from '../../assets/images/delete-icon.png';

import './style.css';

const DeleteBtn = ({
  className,
  id,
  onClick,
}) => (
  <button
    type="button"
    data-id={id}
    className={`delete-btn opacity-on-hover ${className}`}
    onClick={onClick}
  >
    <img
      className="delete-item-image"
      src={deleteIcon}
      alt="delete-item"
    />
  </button>
);

DeleteBtn.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

DeleteBtn.defaultProps = {
  className: '',
};

export default DeleteBtn;
