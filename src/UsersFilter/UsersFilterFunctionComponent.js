import React from 'react';

const UsersFilter = (props) => {
  return (
    <div
      className="users-list-container"
      style={{
        position: 'absolute',
        display: 'inline-flex',
        alignItems: 'center',
        width: '37%',
        top: '3%',
        left: '50%',
        transform: 'translateX(-50%)',
        border: 'none',
        borderRadius: '2px',
        background: '#fff',
        boxShadow: '0 0 3px rgba(0, 0, 0, .3)',
        zIndex: '1',
      }}
    >
      <label
        htmlFor="search"
        style={{
          padding: '.5rem',
          color: '#282c34',
          fontWeight: 'bold',
          backgroundColor: '#f7f7f7',
        }}
      >
        Search
      </label>{' '}
      <input
        id="search"
        className="list-filter"
        type="text"
        autoFocus
        autoComplete="off"
        placeholder="search by company name..."
        aria-required="true"
        value={props.query}
        onChange={props.updateQuery}
        style={{
          border: 'none',
          fontSize: '.9rem',
          padding: '.5rem',
          width: 'calc(100% - 3rem)',
          height: '1rem',
        }}
      />
    </div>
  );
};

export default UsersFilter;
