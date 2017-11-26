import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
import '../node_modules/bootstrap/scss/bootstrap-reboot.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/scss/index.scss';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import ClassExample from './components/class-example';

$(document).ready(function() {
	
	if ( $('#site-body').hasClass('page-class-example') ) {
		const newClass = new ClassExample();
		newClass.testFunction();
		newClass.dataFunction();
	}

	if ( $('#site-body').hasClass('page-comparisons-and-ternaries') ) {
		console.log(21 === '21');
		console.log(21 === 21);
	}	

});