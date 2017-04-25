import './style.scss';

import React, {
	PropTypes
} from 'react';

const propTypes = {
	item: PropTypes.object,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};

class ItemEditor extends React.Component {
	render() {

		const {
			onSave,
			onCancel
		} = this.props;

		const item = this.props.item || {
			title: '',
			content: '',
		};

		let save = () => {
			onSave({
				...item,
				title: this.refs.title.value,
				content: this.refs.content.value,
			});
		};

		let saveText = item.id ? '保存' : '创建';

		return (
			<div className="col-md-8 item-editor-component ">
				<div className="control-area">
					<button className="btn btn-primary" onClick={save}>{saveText}</button>
					<button className="btn btn-default" onClick={onCancel}>取消</button>
				</div>
				<div className="edit-area">
					<input ref="title"	type="text" placeholder="请输入标题" defaultValue={item.title}/>
					<textarea ref="content" placeholder="请输入文章内容" defaultValue={item.content}></textarea>
				</div>
			</div>
		);
	}
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;