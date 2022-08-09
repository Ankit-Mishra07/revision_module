let url = "https://jsonmock.hackerrank.com/api/articles";
let data_container = document.querySelector(".data_container")

const fetchData = async () => {
    let response = []
    for(let i = 1; i <= 5; i++) {
        let res = await fetch(`${url}?page=${i}`);
        let dat = await res.json();
        response.push(...dat.data)
    }
    return response;
}
// console.log(fetchData());

async function getTopComments() {
    let getTop = await fetchData();
    getTop = getTop.sort((a,b) => {
        return b.num_comments - a.num_comments;
    })
    getTop.length = 10
    
    displayData(getTop);
}
async function getLatestComments() {
    let getTop = await fetchData();
    getTop = getTop.sort((a,b) => {
        return b.created_at - a.created_at;
    })
    getTop.length = 10
    
    displayData(getTop);
}
function displayData(data) {
    data_container.innerHTML = null;
    data.forEach((el) => {
        let div = document.createElement("div");
        div.innerHTML = `
    <div class="card">
        <div class="img_box">
            <img src="https://www.bing.com/th?id=OIP.p5aepZh8OpbpDE8YlmVtWgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="">
            <h4>${el.author ? el.author : "author name is mentioned"}</h4>
        </div>
        <h3>${el.title ? el.title.substring(0, 30) : "title not present"}</h3>
        <div class="com_art"> 
        <span class="com"><i class='bx bxs-chat'></i>${el.num_comments}</span>
        <a href=${el.url ? el.url : "http://www.bbc.co.uk/news/uk-politics-36615028"} target="_blank">Go to Article</a>
        </div>
    </div>
        `
        data_container.append(div)
    })
}
