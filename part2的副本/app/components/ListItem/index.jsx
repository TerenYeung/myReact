import './style.scss';

import React from 'react';

function ListItem({
	item
}) {
	return (
		<li className="list-item-component list-group-item">
			<a href="#">
				<span>{item.title}</span>
			</a>
		</li>
	);
}

export default ListItem;