import React from 'react';
import marked from 'marked';

function ItemShowLayer({ item, onEdit, onDelete }) {
  if (!item || !item.id) {
    return (
      <div className="item-show-layer-component col-md-8">
        <div className="no-select">
          请选择左侧列表文章
        </div>
      </div>
    )
  }

  const content = marked(item.content);

  return (
    <div className="item-show-layer-component col-md-8">
      <div className="control-area">
        <button className="btn btn-primary" onClick={()=>onEdit(item.id)}>编辑</button>
        <button className="btn btn-danger" onClick={()=>onDelete(item.id)}>删除</button>
      </div>
      <div className="show-area">
        <h2>{item.title}</h2>
        <div className="item-text">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}

export default ItemShowLayer;