import ShareHolderModel from './share_model';
import Backbone from 'backbone';

//creating an instance of the collection constructor
let ShareCollection = Backbone.Collection.extend({
	url : 'https://api.parse.com/1/classes/Shares',
	model : ShareHolderModel,

	parse: function(data){
		return data.results;
	}

});

export default ShareCollection;
