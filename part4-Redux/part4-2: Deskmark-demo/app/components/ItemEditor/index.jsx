import React from 'react';

class ItemEditor extends React.Component {



  render() {

    const { onSave, onCancel } = this.props;

    let item = this.props.item || {
      title: '',
      content: '',
    };

    let saveText = item.id ? '保存' : '创建';

    let save = () => {
      onSave({
        ...item,
        title: this.refs.title.value,
        content: this.refs.content.value,
      });
    };
    return (
      <div className="item-editor-component col-md-8">
        <div className="control-area">
          <button
            className="btn btn-success"
            onClick = { save }
          >
            {saveText}
          </button>
          <button
            className="btn btn-default"
            onClick = { onCancel }
          >
            取消
          </button>
        </div>
        <div className="edit-area">
          <input
            type="text"
            ref="title"
            placeholder="请填写标题"
            defaultValue = { item.title }
          />
          <textarea
            ref="content"
            placeholder="请填写内容"
            defaultValue= { item.content }
          />
        </div>
      </div>
    );
  }
}

export default ItemEditor;