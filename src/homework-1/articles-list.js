import React from 'react';
import {connect} from 'react-redux';
import Content from './content';
import Languages from './languages';

class ArticlesList extends React.Component {
	constructor(props) {
		super(props);

		this.changeLang = this.changeLang.bind(this);

		this.state = {
			category: "",
			list: [],
			setLang: "bg"
		};
	}

	changeLang(language) {
		this.setState({setLang: language});
	}

	render() {
		const {category, list} = this.props;

		const languages = list.map(({language}) => {
			return language;
		});
		const availableLang = [...new Set(languages)];

		return (
			<main>
				<h2>Test App</h2>
				<Languages availableLang={availableLang} callback={this.changeLang} />
				<Content category={category} list={list} userLangInput={this.state.setLang} />
			</main>
		);
	}
};

function mapStateToProps(state) {
	const {articles} = state.homeworkData;

	return {
		category: articles.category,
		list: articles.list
	};
}
function mapDispatchToProps() {
	return {
		init() {
			const init = {
				type: "INIT_HOMEWORK"
			};

			dispatch(init);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);