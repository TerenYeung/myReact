import React, {
	PropTypes
} from 'react';
import ListItem from 'components/ListItem';

function List({
	items,
	onSelect
}) {
	const itemsContent = items.map(
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
			{itemsContent}
		</div>
	)
}

export default List;
