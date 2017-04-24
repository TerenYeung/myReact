import './style.scss';

import React, {
	PropTypes
} from 'react';

const propTypes = {
	item: PropTypes.object,
}

function ItemShowLayer({
	item,
}) {

	if (!item || !item.id) {
		return (
			<div className=" col-md-8 item-show-layer-component">
				<div className="no-select">请选择左侧列表文章</div>
			</div>
		);
	}

	return (
		<div className="col-md-8 item-show-layer-component ">
			<div className="control-area">
				<button className="btn btn-primary">编辑</button>
				<button className="btn btn-danger">删除</button>
			</div>
			<h2>{item.title}</h2>
			<div className="item-text">
				{item.content}
			</div>
		</div>
	)
}

ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;