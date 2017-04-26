import './style.scss';

import React, {
	PropTypes
} from 'react';

function ItemShowLayer({
	item,
	onEdit,
	onDelete,
}) {

	if (!item || !item.id) {
		return (
			<div className="col-md-8 item-show-layer-component">
				<div className="no-select">请选择左侧列表文章</div>
			</div>
		)
	}

	// const item = item;

	return (
		<div className="item-show-layer-component col-md-8">
			<div className="control-area">
				<button className="btn btn-primary" onClick={()=> onEdit(item.id) }>编辑</button>
				<button className="btn btn-danger" onClick={() => onDelete(item.id)}>删除</button>
			</div>
			<h2>{item.title}</h2>
			<div className="item-text">
				{item.content}
			</div>
		</div>
	);
}

ItemShowLayer.propTypes = {
	item: PropTypes.object,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
}

export default ItemShowLayer;