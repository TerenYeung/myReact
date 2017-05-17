import React from 'react';

function CreateBar({ onClick }) {
  return (
    <a href="#" onClick={ onClick } className="create-bar-component list-group-item">
      + 创建新的文章
    </a>
  );
}

export default CreateBar;