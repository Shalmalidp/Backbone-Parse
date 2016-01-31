// var data = _.random(0,1000);
function SharesTemplate(x){
	

	return `
	<div class="holder">
		<li> Share Holder Name : <span>${x.Fname} ${x.Lname}</span>
			<p> Share Numbers : <span> ${x.StartShareNo}</span> to <span>${x.EndShareNo}</span></p>
			<p> Total Shares  : <span>${x.totalShares}</span></p>
		</li>
		<button> Transfer Shares </button>
	</div>`;
}

export default SharesTemplate;
	
	// <p> Share Value :${_.random(0,100)} </p>