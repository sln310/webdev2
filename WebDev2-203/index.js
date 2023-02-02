const listElement = document.querySelector(".posts");
const fetchButton = document.querySelector("#available-posts button");
const postTemplate = document.querySelector("template");
const addButton = document.querySelector("#new-post button");
const title = document.getElementById("title");
const content = document.getElementById("content");

async function sendHttpRequest(method, url) {
  // return promise

  //with fetch() function
  // const response = await fetch(url, {method})
  // const result = await response.json()
  // return result

  // return await fetch(url, {method}).then(r => r.json())

  //with axios
  const { data } = await axios(url, { method });
  return data;
  // return axios.get(url)
}

async function add(event) {
  event.preventDefault();
  const addTitle = title.value;
  const addContent = content.value;

  const responseData = await sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    { addTitle, addContent }
  );

  console.log(responseData);

  const postElClone = document.importNode(postTemplate.body, true);
  postElClone.querySelector("h2").textContent = responseData.addTitle;
  postElClone.querySelector("p").textContent = responseData.addContent;
  postElClone.querySelector("li").id = responseData.id;
  listElement.appendChild(postElClone);
}

title.value = "";
content.value = "";

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(responseData);
  if (responseData.length > 0) {
    for (const post of responseData) {
      const postElClone = document.importNode(postTemplate.content, true);
      postElClone.querySelector("h2").textContent = post.title;
      postElClone.querySelector("p").textContent = post.body;
      postElClone.querySelector("li").id = post.id;
      listElement.appendChild(postElClone);
    }
  }
}

// READ/GET
fetchButton.addEventListener("click", fetchPosts);
