import React, {
	PropTypes
} from 'react';

function ListItem({
	item,
	onClick
}) {
	let formatTime = '未知时间';

	if (item.time) {
		formatTime = new Date(item.time).toLocaleString();
	}

	return (
		<a
			href="#"
			className="list-group-item item-component"
			onClick={ onClick }
		>
			{/*<span className="label label-default label-pill pull-xs-right">
				{ formatTime }
			</span>*/}
			{ item.title }
		</a>
	)
}

export default ListItem;