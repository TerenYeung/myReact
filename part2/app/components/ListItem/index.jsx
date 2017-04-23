import React, {
	PropTypes,
} from 'react';

import './style.scss';

const propTypes = {
	item: PropTypes.object.isRequired,
};

function ListItem({
	item,
}) {
	return (
		<a className="list-group-item list-item-component">
			<span className="label label-default left-inline">{item.title}</span>
			<span className="label label-info pull-right">{item.time}</span>
		</a>
	);
}

ListItem.propTypes = propTypes;

export default ListItem;