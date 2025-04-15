import React, { useState, useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const DicaPowerbook = (props) => {
  return (
    <div className="admonition admonition-tip alert alert--success">
      <div className="admonition-heading">
        <h5>
        <FontAwesomeIcon icon={faRobot} size="2x" color="white" />
        &nbsp; &nbsp;PowerBook
        </h5>
      </div>
      <div className="admonition-content">
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default DicaPowerbook;