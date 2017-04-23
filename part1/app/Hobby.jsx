import React, {
	PropTypes
} from 'react';

function Hobby(props) {
	return <li>{props.hobby}</li>;
}

const propTypes = {
	hobby: PropTypes.string.isRequired
};

Hobby.propTypes = propTypes;

export default Hobby;