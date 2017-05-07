import React, {
	PropTypes
} from 'react';
import ListItem from 'components/ListItem';

function List({
	items,
	onSelect
}) {
	const itemContents = items.map(
		item => (
			<ListItem 
				item={item}
				key={item.id}
				onClick={()=> onSelect(item.id)}
			/>
		)
	);

	return (
		<div className="list-component">
			{itemContents}
		</div>
	)
}

export default List;