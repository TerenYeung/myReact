import './style.scss';

import React from 'react';

import ListItem from '../ListItem';

function List({
	items
}) {

	let itemsContent = items.map(
		(item) => (
			<ListItem
				item={item}
				key={item.id}
				/>
		)
	)

	return (
		<ul className="list-componet">
			{itemsContent}
		</ul>
	);
}

export default List;