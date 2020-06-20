// from data.js
let tableData = data;

// YOUR CODE HERE!
//Data Entry
let table = document.getElementById('ufo-table');
tableData.forEach((e, index) => {
   let  row = table.insertRow(index+1);
        row.insertCell(0).innerHTML= e.datetime;
        row.insertCell(1).innerHTML= e.city;
        row.insertCell(2).innerHTML= e.state;
        row.insertCell(3).innerHTML= e.country;
        row.insertCell(4).innerHTML= e.shape;
        row.insertCell(5).innerHTML= e.durationMinutes;
        row.insertCell(6).innerHTML= e.comments;   
});

//on selection of filter
let tdindex,filterSelection;
tdindex = 0;

datetimeId = document.getElementById('datetime');
filterSelection = document.getElementById('thfilter');

filterSelection.onchange = () =>{
  let thvalue,thindex,filter;
  thvalue= filterSelection.value;
  thindex = thvalue.split('-');
  filter='';

  document.getElementById('selectedth').textContent = `Enter a ${thindex[1]}`;
  datetimeId.value = '';
  thindex[0] == 0 ? datetimeId.setAttribute('placeholder' ,'1/11/2010') : datetimeId.setAttribute('placeholder' ,`Enter a ${thindex[1]}`);
  tdindex = thindex[0];
  filterdata(filter);
}


//function for filtering 
document.getElementById('filter-btn').addEventListener('click', () =>{
  let filter,inDate;
    filter = datetimeId.value
    console.log(filter);
    if(filter == ''){
      alert(`Please Enter the value to Filter`);
      return false;
    }
    if(tdindex === 0)
    {
      inDate = filter.split('/');
      if(inDate[0].length === 2 &&  inDate[0].charAt(0) == 0){
          (inDate[1].length === 2 && inDate[1].charAt(0) == 0) ? filter = `${inDate[0].charAt(1)}/${inDate[1].charAt(1)}/${inDate[2]}` : filter = `${inDate[0].charAt(1)}/${inDate[1]}/${inDate[2]}`;
      } else{
          (inDate[1].length === 2 && inDate[1].charAt(0) == 0) ? filter = `${inDate[0]}/${inDate[1].charAt(1)}/${inDate[2]}` : filter = `${inDate[0]}/${inDate[1]}/${inDate[2]}`;
      }
    } else {
      filter = filter.toUpperCase();
    }
    filterdata(filter);
});


let filterdata = (filter) =>{
  let tr,td,i,event;
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[tdindex];
    if (td) {
      txtValue = td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        if(event === 'even'){
          event = 'odd';
          tr[i].style.background =  '#2b3e50' ;
        }else{
          event = 'even';
          tr[i].style.background =   '#556d82' ;
        }
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};


