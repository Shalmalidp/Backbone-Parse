import Backbone from 'backbone';

//ALLOWS YOU TO MODIFY EXISTING PARSE INFO WITH NEW INFO

let ShareHolderModel = Backbone.Model.extend({

// where to get the data
urlRoot: 'https://api.parse.com/1/classes/Shares',
idAttribute : 'objectId'
});

export default ShareHolderModel;

window.holder = new ShareHolderModel();