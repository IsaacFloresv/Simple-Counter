import React from "react";

import SimpleCounter from "./simplecounter.js";


//create your first component
const Home = () => {
	let hour = 1;
	let min = 2;
	let sec = 3;	
	let mili =4;
	return (
		<div className="text-center">
			<div className="countainer-fluid">
				<div>
					<SimpleCounter 
					horas = {hour}
					minutos = {min}
					segundos={sec}
					miliseg = {mili}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
