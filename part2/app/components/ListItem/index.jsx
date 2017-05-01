import React, {
	PropTypes,
} from 'react';

import './style.scss';

const propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
};

function ListItem({
	item,
	onClick,
}) {

	return (
		<a className="list-group-item list-item-component"
			href="#"
			onClick={onClick}
		>
			<span className="label label-default left-inline">{item.title}</span>
			<span className="label label-info pull-right">{item.time}</span>
		</a>
	);
}

ListItem.propTypes = propTypes;

export default ListItem;