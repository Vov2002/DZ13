// localStorage.setItem('data',15)
// console.log(localStorage.getItem('data'))
let m = [5,6,7]
localStorage.setItem('data', JSON.stringify(m))
let b = localStorage.getItem('data')
b = JSON.parse(b)
console.log(b)
http = new XMLHttpRequest() 
http.onreadystatechange = function() {
if(this.readyState == 4 && this.status == 200){
    func(this.responseText)
    }
    }
    http.open('GET', 'https://learn.javascript.ru/', true)
http.send()
function func(data){
console.log(data)
}