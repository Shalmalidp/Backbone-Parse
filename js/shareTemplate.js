function SharesTemplate(x){

	return `
	<li> ${x.Fname} has Shares Nos ${x.StartShareNo} to ${x.EndShareNo} and a total of 
	${x.totalShares}</li>`;
}

export default SharesTemplate;