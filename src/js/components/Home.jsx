import React from "react";
import NavBar from './NavBar.jsx';
import Card from './Card.jsx';
import Jumbotron from './Jumbotron.jsx';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg"

//create your first component
const Home = () => {
	let textArray= [
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis, aperiam quo similique quisquam ratione. Maiores laudantium, iste debitis accusamus sequi, reiciendis non est quas minus sint ad nulla reprehenderit?",
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis, aperiam quo similique quisquam ratione. Maiores laudantium, iste debitis accusamus sequi, reiciendis non est quas minus sint ad",
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis, aperiam quo similique quisquam ratione. Maiores laudantium"
	]
	return (
		<div>
			<NavBar/>
			<Jumbotron/>
			<div className= "d-flex justify-content-center gap-3"> 
				{textArray.map((text) => <Card text={text}/>)}
			</div>
		</div>
	);
};

export default Home;