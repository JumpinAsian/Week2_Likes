
function addOne(id) {
    var element = document.querySelector(`#${id}`)
    console.log(element)
    element.innerText++
}


// console.log("page loading...");

// // index     0  1   2
// var likes = [9, 12, 9];
// var spans = [
//     document.querySelector("#likes1"),
//     document.querySelector("#likes2"),
//     document.querySelector("#likes3")
// ];

// function addOne(id) {
//     addOne[id]++;
//     spans[id].innerHTML = addOne[id] + "like(s)";
// }