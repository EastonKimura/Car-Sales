import React from "react";
import { removeFeature } from "../actions/actions";
import { connect } from "react-redux";


const AdditionalFeature = props => {
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
export default connect(null, { removeFeature })(AddedFeature)
