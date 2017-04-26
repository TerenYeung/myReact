import './style.scss';

import React from 'react';

class ItemEditor extends React.Component {
	render() {
		return (
			<div className="item-editor-component col-md-8">
				<div className="control-area">
					<button className="btn btn-primary">保存</button>
					<button className="btn btn-default">取消</button>
				</div>
				<div className="edit-area">
					<input type="text" placeholder="请输入标题"/>
					<textarea placeholder="请输入内容"></textarea>
				</div>
			</div>
		);
	}
}

export default ItemEditor;