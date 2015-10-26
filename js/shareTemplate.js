function SharesTemplate(x){
	var data = _.random(0,1000)

	return `
	<h3>
	<li> Share Holder Name : <span>${x.Fname} ${x.Lname}</span>
	<p> Share Numbers : <span> ${x.StartShareNo}</span> to <span>${x.EndShareNo}</span></p>
	<p> Total Shares  : 
	<span>${x.totalShares}</span></p>
	</li>`;
}

export default SharesTemplate;
	//<p>Value : data </p>