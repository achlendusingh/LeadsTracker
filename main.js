let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//if myleads has some content, the extension on being loaded will display the content in the local storage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads); 
}

// const tabs=[
//   {url:"https://www.google.com/"}
// ]

function render(leads) {
  let listitems = "";
  for (var i = 0; i < leads.length; i++) {
    //ulEl.innerHTML+= "<li>"+myLeads[i]+"</li>"
    //  listitems+= "<li><a target='_blank' href='    "+myLeads[i]+"    '    >"+myLeads[i]+   "</a></li>"
    listitems += `
      <li>
      <a target='_blank' href='${leads[i]}'>
      ${leads[i]}
      </a>
      </li>`;
  }
  ulEl.innerHTML = listitems;
}

//delete button functionality
deleteBtn.addEventListener("dblclick", function () {
  //clearing localStorage
  localStorage.clear();
  myLeads = [];
  render(myLeads);
  // console.log("double click");
});

//input button functionality
inputBtn.addEventListener("click",  function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
  //save the myLead array to local storage
  //PS: remember JSON.stringify()
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  // console.log(localStorage.getItem("myLeads"));
});

//Save Tab button functionality
tabBtn.addEventListener("click",function()
{
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  // console.log(tabs)
  myLeads.push(tabs[0].url)
localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads)
})
  //console.log(tab[0].url)

// console.log(localStorage.getItem("myLeads"))
})
