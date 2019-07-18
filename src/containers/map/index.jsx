import React from 'react'
import Map from './components/Map';

export default React.memo(function MapMain() {
	return (
		<div>
			<Map
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `100vh` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	)
})
