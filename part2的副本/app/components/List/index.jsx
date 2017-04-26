import './style.scss';

import React, {
	PropTypes
} from 'react';

import ListItem from '../ListItem';

function List({
	items,
	onSelect,
}) {

	let itemsContent = items.map(
		(item) => (
			<ListItem
				item={item}
				key={item.id}
				onClick={() => onSelect( item.id )}
				/>
		)
	)

	return (
		<ul className="list-componet" style={{padding: 0}}>
			{itemsContent}
		</ul>
	);
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
}

export default List;