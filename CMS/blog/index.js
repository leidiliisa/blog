function getdata() {}
fetch("https://leidiliisa-2ec1.restdb.io/rest/posts", {
  method: "GET",
  headers: {
    "x-apikey": "60706bd0f592f7113340ee18",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showPosts(response);
  })
  .catch((err) => {
    console.error(err);
  });
getdata();

function showPosts(posts) {
  console.log(posts);
  //grab the template
  const template = document.querySelector("template.frontpagelist").content;

  posts.forEach((post) => {
    //clone
    const copy = template.cloneNode(true);
    //adjust
    template.querySelector("h2").textContent = post.title;
    template.querySelector("h3 span").textContent = post.username;
    template.querySelector("a.readmore").href = `blog.html?blog=${post._id}`;
    //append
    document.querySelector("main").appendChild(copy);
  });
}
