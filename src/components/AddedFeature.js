import React from "react";
import { addFeature } from "../actions/actions";
import { connect } from "react-redux";
const AddedFeature = props => {
  return (
		<li>
			{}
			<button
				onClick={() => props.removeFeature(props.feature.id)}
				className='button'
			>
				X
			</button>
			{props.feature.name}
		</li>
	);
};
export default connect(null, { removeFeature })(AddedFeature);
