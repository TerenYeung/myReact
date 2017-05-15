import './style.scss';

import React, { PropTypes } from 'react';

function ItemShowLayer({ item, onEdit, onDelete}) {

  if(!item || !item.id) {
    return (
      <div className="item-show-layer-component col-md-8">
        <div className="no-select">
          请选择左侧列表里的文章
        </div>
      </div>
    )
  }

  return (
    <div className="item-show-layer-component col-md-8">
      <div className="control-area">
          <button className="btn btn-primary" onClick={()=>onEdit(item.id)}>编辑</button>
          <button className="btn btn-danger" onDelete={()=>onDelete(item.id)}>删除</button>
      </div>
      <h2>{item.title}</h2> 
      <div className="item-text">
        {item.content}
      </div>
    </div>
  )
}

export default ItemShowLayer;