# javascript-challenge
JavaScript Assignment

**TABLE AND DATE SEARCH**
Created a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

Used the provided UFO dataset and incorporated the form with a Javascript functionality to search array in JS objects. The code appends a table to the web page and then adds new rows of data for each UFO sighting.

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
