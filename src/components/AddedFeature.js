import React from "react";
import { addFeature } from "../actions/actions";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
		<li>
			{}
			<button
				onClick={() => props.addFeature(props.feature)}
				className='button'
			>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};
export default connect(null, { addFeature })(AdditionalFeature);
