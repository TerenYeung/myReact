import React, {
	PropTypes
} from 'react';

function CreateBar({
	onClick
}) {
	return (
		<a href="#" onClick={onClick}>
			+ 创建新文章
		</a>
	)
};

export default CreateBar;