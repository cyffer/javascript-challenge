# javascript-challenge
JavaScript Assignment

**TABLE AND DATE SEARCH**
Created a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

Used the provided UFO dataset and incorporated the form with a Javascript functionality to search array in JS objects. The code appends a table to the web page and then adds new rows of data for each UFO sighting.

```JSON
let data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  {
    datetime: "1/1/2010",
    city: "bonita",
    state: "ca",
    country: "us",
    shape: "light",
    durationMinutes: "13 minutes",
    comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
  },
```


The page contains a column for date/time, city, state, country, shape, and comment at the very least.
Applied a date form in the HTML document and wrote JS code that is activated on mouse events and search through the date/time column to find rows that match user input.

Filtering selection function

```Javascript
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

```

**Level 2: Multiple Search Categories**

Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

`date/time`

`city`

`state`

`country`

`shape`

Event Listener function

```Javascript
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

```
