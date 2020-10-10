import React from 'react';

const BoardColumn = (props) => {
	const {title} = props;

	return (
		<section className="board-column">
			<h4>{title}</h4>
			<BoardCard />
			<BoardCard />
			<CreateCard />
		</section>
	);
};

const BoardCard = () => {
	return (
		<section className="board-card">
			<h5>Card</h5>
			<p>Praesent tempor pulvinar ultrices. Nam quis dolor id felis ultricies viverra. In ut ligula vitae turpis suscipit pellentesque sit amet nec urna. Suspendisse sapien lectus, bibendum et molestie eu, consectetur at nisi.</p>
		</section>
	);
}

const CreateCard = () => {
	return (
		<section className="board-card">
			<button>Create card</button>
		</section>
	);
}

export default BoardColumn;