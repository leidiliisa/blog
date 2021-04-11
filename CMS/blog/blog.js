const searchParams = new URLSearchParams(window.location.search);
const blogId = searchParams.get("blog");
fetch(
  "https://leidiliisa-2ec1.restdb.io/rest/posts/" +
    blogId +
    "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "60706bd0f592f7113340ee18",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPost(data) {
  console.log(data);
  document.querySelector("h1").textContent = data.title;
  document.querySelector("h2 span").textContent = data.username;
  document.querySelector("p").textContent = data.content;

  const template = document.querySelector(".commentTemplate").content;
  data.comments.forEach((comment) => {
    console.log(comment);

    const clone = template.cloneNode(true);
    clone.querySelector("h3").textContent = comment.content;
    clone.querySelector("p").textContent = comment.username;
    document.querySelector(".commentList").appendChild(clone);
  });
}
