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

//----------------------------------------------------------------------------------

async function add(event) {
  event.preventDefault();
  const addTitle = title.value;
  const addContent = content.value;

  const data = { userId: 0, title: addTitle, body: addContent };

  await axios
    .post("https://jsonplaceholder.typicode.com/posts", data)
    .then((response) => {
      const newDate = response.data;
      console.log(newDate);

      const postElClone = document.importNode(postTemplate.content, true);
      postElClone.querySelector("h2").textContent = newDate.title;
      postElClone.querySelector("p").textContent = newDate.body;
      postElClone.querySelector("li").id = newDate.id;
      listElement.appendChild(postElClone);
    })
    .catch((error) => console.log(error));
  title.value = "";
  content.value = "";
}

//----------------------------------------------------------------------------------

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
//POST
addButton.addEventListener("click", add);
