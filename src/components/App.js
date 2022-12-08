import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	const [pigInfo, showPigInfo] = useState(false)

	function handlePigInfo() {
		showPigInfo(!pigInfo)
	}

	return (
		<div className="App">
			<Nav />
			{hogs.map((hog) =>
				<div>
					<div className="pigTile">{hog.name}</div>
					<button className="pigTile" onClick={handlePigInfo}>Specialty: {hog.specialty} Weight: {hog.weight}</button>
					<img src={hog.image} />
				</div>
			)}
			{/* <button className="pigTile" onClick={handlePigInfo}>{pigInfo ? hogs.name : "pigTileInfo"}</button> */}
		</div>
	);
}

export default App;
