import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css'; // Create a separate CSS file for styling

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>
          <span className='path-icon'>{path.icon}</span>
          <Link to={path.link}><span className='path-name'>{path.name}</span></Link>
          <span className='path-separator'>{index < paths.length - 1 && ' > '} </span>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
