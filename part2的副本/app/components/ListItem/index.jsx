import './style.scss';

import React, {
	PropTypes
} from 'react';

function ListItem({
	item,
	onClick,
}) {
	return (
		<li className="list-item-component list-group-item" >
			<a href="#"
				onClick={onClick}
			>
				<span>{item.title}</span>
				<span>{item.time}</span>
			</a>
		</li>
	);
}

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default ListItem;