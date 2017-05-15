import './style.scss';

import React, { PropTypes } from 'react';

class ItemEditor extends React.Component {
  render() {

    const { onSave, onCancel } = this.props; 
    const item = this.props.item || {
      title: '',
      content: '',
    };

    let actionText = item.id ? '保存' : '创建';

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
          <button className="btn btn-success" onClick={save}>
            { actionText }
          </button>
          <button className="btn" onClick={onCancel}>
            取消
          </button>
        </div>
        <div className="edit-area">
          <input ref="title" type="text" placeholder="请填写标题" defaultValue={item.title}/>
          <textarea ref="content" placeholder="请填写内容" defaultValue={item.content}></textarea>
        </div>
      </div>
    )
  }
}

export default ItemEditor;