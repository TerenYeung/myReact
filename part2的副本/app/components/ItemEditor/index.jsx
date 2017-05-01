import './style.scss';
import marked from 'marked';

import React, {
	PropTypes
} from 'react';

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

		let saveText = item.id ? '保存' : '创建';

		let formatContent

		let save = () => {
			onSave({
				...item,
				title: this.refs.title.value,
				content: this.refs.content.value,
			})
		}

		return (
			<div className="item-editor-component col-md-8">
				<div className="control-area">
					<button className="btn btn-primary" onClick={save}>{saveText}</button>
					<button className="btn btn-default" onClick={onCancel}>取消</button>
				</div>
				<div className="edit-area">
					<input ref="title" type="text" placeholder="请输入标题" defaultValue={item.title}/>
					<textarea ref="content" placeholder="请输入内容" defaultValue={item.content}></textarea>
				</div>
			</div>
		);
	}
}

ItemEditor.propTypes = {
	item: PropTypes.object,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default ItemEditor;