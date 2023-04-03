// Importing local modules
import { largerRoot } from "./modules/largerRoot.js";
import { smallerRoot } from "./modules/smallerRoot.js";
import { productOfRoots } from "./modules/productOfRoots.js";
import { sumOfRoots } from "./modules/sumOfRoots.js";
//
// Form inputs, buttons and results area 
const coefA = document.getElementById("a") as HTMLInputElement;
const coefB = document.getElementById("b") as HTMLInputElement;
const coefC = document.getElementById("c") as HTMLInputElement;
//
const lgRootBtn = document.getElementById("large") as HTMLButtonElement;
const smRootBtn = document.getElementById("small") as HTMLButtonElement;
const bothRootBtn = document.getElementById("both") as HTMLButtonElement;
const rootProductBtn = document.getElementById("product") as HTMLButtonElement;
const rootSumBtn = document.getElementById("sum") as HTMLButtonElement;
//
const results = document.getElementById("Results") as HTMLDivElement;
const viewResults = document.getElementById("viewResults") as HTMLDivElement;
var a:number, b:number, c:number;
//
// Collect information from forms
/**
 * This method prevents the page from refreshing and gathers values from the
 * form on a mouse click
 * 
 * @param evt Mouse event
 */
function gatherValues(evt:MouseEvent){
    evt.preventDefault(); // Prevents the page from refreshing
    //
    a = Number(coefA.value);
    b = Number(coefB.value);
    c = Number(coefC.value);
    results.classList.remove("visually-hidden"); // Allows the results area to be visible
}
//
// Button Listeners
lgRootBtn.addEventListener('click', evt => {
    gatherValues(evt);
    try {
        viewResults.innerHTML = `<h5>For the larger root: <br/><em>x</em> = ${largerRoot(a,b,c)}</h5>`;
        
    } catch (error) {
        viewResults.innerHTML = `<h5 class="bg-danger">${error}</h5>`;
    }
});// end of Large Root Button
//
smRootBtn.addEventListener('click', evt => {
    gatherValues(evt);
    try {
        viewResults.innerHTML = `<h5>For the smaller root: <br/><em>x</em> = ${smallerRoot(a,b,c)}</h5>`;
        
    } catch (error) {
        viewResults.innerHTML = `<h5 class="bg-danger">${error}</h5>`;
    }
});// end of Small Root Button
//
bothRootBtn.addEventListener('click', evt => {
    gatherValues(evt);
    try {
        viewResults.innerHTML = `<h5>For the larger root: <br/><em>x</em> = ${largerRoot(a,b,c)}</h5>`;
        viewResults.innerHTML += `<h5>For the smaller root: <br/><em>x</em> = ${smallerRoot(a,b,c)}</h5>`;
        
    } catch (error) {
        viewResults.innerHTML = `<h5 class="bg-danger">${error}</h5>`;
    }
});// end of Both Roots Button
//
rootProductBtn.addEventListener('click', evt => {
    gatherValues(evt);
    try {
        viewResults.innerHTML = `<h5>Product of Roots = ${productOfRoots(a,c)}</h5>`;
        
    } catch (error) {
        viewResults.innerHTML = `<h5 class="bg-danger">${error}</h5>`;
    }
});// end of Product of Roots Button
//
rootSumBtn.addEventListener('click', evt => {
    gatherValues(evt);
    try {
        viewResults.innerHTML = `<h5>Sum of Roots = ${sumOfRoots(a,b)}</h5>`;
        
    } catch (error) {
        viewResults.innerHTML = `<h5 class="bg-danger">${error}</h5>`;
    }
})// end of Sum of Roots Button