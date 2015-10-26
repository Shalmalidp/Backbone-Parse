import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';

import ShareTemplate from './shareTemplate';
import ShareCollection from './share_collection';
import ShareHolderModel from './share_model';


//PULL KEY INFO FROM THE API  IN PARSE
const APP_ID  = 'pqv7DniTxgOhOxJg9COjkQUvFvDY9U3DV60MvnEn';
const API_KEY = '4uvFUxWqRxE6VfkytVjdTI8YihM7haqQmkW5SfWx';

$.ajaxSetup({
	headers : {
		'X-Parse-Application-Id' : APP_ID,
		'X-Parse-REST-API-Key'   : API_KEY
	}
});

let shareHolders = new ShareCollection();
let holder = new ShareHolderModel();

// ShareHolder.each(function(holder){
// holder.totalShares = holder.EndShareNo - holder.StartShareNo;

// });


function DisplayData(){

//creating an empty dom node
let $div = $('<div></div>');

// Iterate each of the models in the collection
shareHolders.each(function(holder){
//grab raw data from holder model 
// let data = holder.toJSON(); dont need to use if you are manipulating data just do it with attributes.
let x = holder.attributes.EndShareNo - holder.attributes.StartShareNo;
holder.set({'totalShares': x });
holder.save();

let template = ShareTemplate(x);
let $li = $(template);
$div.append($li);
});
	$('body').html($div);
};

shareHolders.fetch().then(DisplayData);


















console.log('Hello, World');
