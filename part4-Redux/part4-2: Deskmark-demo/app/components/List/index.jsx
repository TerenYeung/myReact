import React from 'react';

import ListItem from 'components/Listitem';

function List({items, onSelect }) {

  const itemList = items.map(
    item => (
      <ListItem
        item = { item }
        onClick = { () => onSelect(item.id) }
      />
    )
  );

  return (
    <div className="list-component">
      { itemList }
    </div>
  );
}

export default List;