import React from 'react';
import Layout from './hoc/layout'
import Home from './components/home'
import PopupHandler from './components/popupHandler'
import { connect } from 'react-redux'



const App = (props) => (

	<div>
		{props.isPopupActive && <PopupHandler/>}
		<Layout>
			<Home/>
		</Layout>
	</div>

)	
	

const mapStateToProps = (state) => (
	{
		isPopupActive: state.popup.isOpen
	}
)



export default connect(mapStateToProps, null)(App);
