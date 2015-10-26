function SharesTemplate(x){

	return `
	<h3>
	<li> Share Holder Name : <span>${x.Fname} ${x.Lname}</span>
	<p> Share Numbers : <span> ${x.StartShareNo}</span> to <span>${x.EndShareNo}</span></p>
	<p> Total Shares  : 
	<span>${x.totalShares}</span></p></li>
	`;
}

export default SharesTemplate;