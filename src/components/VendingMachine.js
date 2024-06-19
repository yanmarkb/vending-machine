import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
	return (
		<div>
			<h1>Vending Machine</h1>
			<nav>
				<ul>
					<li>
						<Link to="/chips">Chips</Link>
					</li>
					<li>
						<Link to="/soda">Soda</Link>
					</li>
					<li>
						<Link to="/candy">Candy</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default VendingMachine;
