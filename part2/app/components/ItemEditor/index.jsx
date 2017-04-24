import './style.scss';

import React, {
	PropTypes
} from 'react';

const propTypes = {
	item: PropTypes.object,
};

class ItemEditor extends React.Component {
	render() {

		const item = this.props.item;

		return (
			<div className="col-md-8 item-editor-component ">
				<div className="control-area">
					<button className="btn btn-primary">保存</button>
					<button className="btn btn-default">取消</button>
				</div>
				<div className="edit-area">
					<input type="text" placeholder="请输入标题" defaultValue={item.title}/>
					<textarea placeholder="请输入文章内容" defaultValue={item.content}></textarea>
				</div>
			</div>
		);

	}
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;