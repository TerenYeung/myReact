import './style.scss';

import React, {
	PropTypes
} from 'react';
import ListItem from '../ListItem';

const propTypes = {
	items: PropTypes.array.isRequired
};

function List({
	items
}) {
	const itemsContent = items.map(item => (
		<ListItem item={item} key={item.id} />
	))

	return (
		<div className="list-component">
				{itemsContent}
			</div>
	)
}

List.propTypes = propTypes;

export default List;