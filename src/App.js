import React from 'react';
import Layout from './hoc/layout'
import Home from './components/home'
import PopupHandler from './components/popupHandler'



const App = (props) => (

	<div>
		{props.isPopupActive && <PopupHandler/>}
		<Layout>
			<Home/>
		</Layout>
	</div>

)	
	


export default App
