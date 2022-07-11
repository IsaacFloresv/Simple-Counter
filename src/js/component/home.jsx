import React from "react";

import SimpleCounter from "./simplecounter.js";


//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<div className="countainer-fluid">
				<div>
					<SimpleCounter 
					horas = ''
					minutos = ''
					segundos=''
					milisegundos = ''
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
