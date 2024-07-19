const baseurl = "http://localhost:3000/users"
async function datas() {
    const response = await fetch(`${baseurl}`);
    data = await response.json();
    console.log(data);
}
datas()