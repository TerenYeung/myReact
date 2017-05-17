import React from 'react';

function ListItem({item, onClick }) {
  return (
    <a href="#"
      className="list-item-component"
      onClick={ onClick }
    >
      <span>
        {item.title}
      </span>
      <span>
        {item.time}
      </span>
    </a>
  );
}

export default ListItem;