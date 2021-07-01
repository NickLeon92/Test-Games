let firststore = ""

function main(){

let timeEl = document.getElementById("timer")
var time = moment().format('MMMM Do YYYY, h:mm:ss a')
let firststore = localStorage.getItem("ogtime")
timeEl.textContent = firststore

if(firststore !== null){  
    return
}
else{
    timeEl.textContent = firststore
}

localStorage.setItem("ogtime", time)

}

document.getElementById("timer").textContent = firststore

main()