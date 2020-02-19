import React from 'react';
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
const store = createStore(appReducer);

const App = props => {
	const removeFeature = item => {
	};
	const buyItem = item => {
	};
	return (
		<Provider store={store}>
			<div className='boxes'>
				<div className='box'>
					<Header car={state.car} />
					<AddedFeatures car={state.car} />
				</div>
				<div className='box'>
					<AdditionalFeatures additionalFeatures={state.additionalFeatures} />
					<Total car={state.car} additionalPrice={state.additionalPrice} />
				</div>
			</div>
		</Provider>
	);
export default App;
