import './style.scss';

import React, {
	PropTypes
} from 'react';

function CreateBar({
	onClick
}) {
	return (
		<div className="create-bar-component list-group-item">
			<a href="#" onClick={onClick}>
				+ 创建新的文章
			</a>	
		</div>
	);
}

CreateBar.propTypes = {
	onClick: PropTypes.func.isRequired,
}

export default CreateBar;