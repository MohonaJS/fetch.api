/* const btn = document.querySelector("button");
const ul = document.querySelector("ul.people");
function finished(responsive){
    const bodyS = responsive.text()
    bodyS.then( data => {
        console.log(data);
    })

}
    btn.addEventListener("click", () => {
        const request = fetch('https://randomuser.me/api?inc=gender,name,nat&results=');
        console.log(request);
        request.then(finished);

    }) */

   
    const btn = document.querySelector("button");
    const ul = document.querySelector("ul.people");
    btn.addEventListener("click", () => {
        const request = fetch('https://randomuser.me/api?inc=gender,name,nat&results=');

    request
    .then(response => response.json())
    .then(data => {
        for(let user of data.results){
            const li = document.createElement("li") 
            li.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`
            ul.append(li)

        }
    })

    })

