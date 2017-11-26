import axios from 'axios';

class ClassExample {
	constructor() {
		this.testFunction = this.testFunction.bind(this),
		this.dataFunction = this.dataFunction.bind(this)
	}

	testFunction() {
		const p          = document.createElement('p');
		const text       = document.createTextNode('Hello World');
		const simpleDiv  = document.getElementById('class-simple-result');
		
		p.appendChild(text);
		simpleDiv.appendChild(p);
	}

	dataFunction() {
		axios.get(`http://jonescreativeconcepts.com/wp-json/custom-endpoints/v2/post-type/post`)
		.then(response => {
			Array.from(response.data).forEach(function (post) {
				const article      = document.createElement('article');
				const articleTitle = document.createElement('h4');
				const dataTitle    = document.createTextNode(post['title']);
				const dataText     = document.createTextNode(post['content']);
				const cardBody     = document.createElement('div');
				const cardText     = document.createElement('p');
				const dataDiv      = document.getElementById('class-data-result');

				article.setAttribute('id', post['id']);
				article.setAttribute('class', 'card');
				articleTitle.setAttribute('class', 'card-title');
				cardText.setAttribute('class', 'card-text');
				cardBody.setAttribute('class', 'card-body');
				article.appendChild(cardBody);
				cardText.appendChild(dataText);
				cardBody.appendChild(articleTitle);
				cardBody.appendChild(cardText);
				articleTitle.appendChild(dataTitle);
				dataDiv.appendChild(article);
			});
		})
		.catch(error => {
			console.log(error);
		});
	}
}

export default ClassExample