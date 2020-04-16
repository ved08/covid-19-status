let enteredDate = document.getElementById('dateBox');
//let filteredByDate = document.getElementById('filteredByDate');
function submit(){
	// fetch('https://api.covid19india.org/data.json')
	// .then(response => response.json())
	// .then(data => {
	// 	let stringifyData = JSON.stringify(data.cases_time_series)
	// 	let parsedData = JSON.parse(stringifyData);
	// 	 for(let i = 0; i <= parsedData.length; i++){
	// 	 	if(parsedData[i].date == enteredDate){
	// 	 		console.log(parsedData[i])
	// 	 	}
	// 	 }
	// 	console.log(parsedData[0])
	// })
	// .catch(err => console.log(err))
	//console.log(enteredDate.value)
	fetch('https://api.covid19india.org/data.json')
  .then(response => response.json())
  .then(({ cases_time_series: cases }) => cases
    .find(x => {
		if(x.date === enteredDate.value + ' '){
			document.getElementById('filteredByDate').innerHTML = `${x.dailyconfirmed} cases on ${enteredDate.value}`
		}
	})
  );
}
