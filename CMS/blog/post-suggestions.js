const form = document.querySelector("form");

form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
  evt.preventDefault();
  console.log(form.elements.title.value);
  console.log(form.elements.username.value);
  console.log(form.elements.content.value);

  document.querySelector("input[type=submit]").disabled = true;

  fetch(
    "https://leidiliisa-2ec1.restdb.io/rest/posts/607077be0f35c91c000061c9",
    {
      method: "POST",
      headers: {
        "x-apikey": "60706bd0f592f7113340ee18",
        "Content-Type": "application/json",
      },
      body:
        '{"title":"Turkey is so cool","username":"LeidiLiisa","content":"People make preconceptions about other people every day, and honestly, we do the same thing to countries. Some of us want to visit resort towns; they like the comfort and control over their vacation. I\'m not saying that is wrong, sometimes we all need that.\\n\\nWith Turkey, I have been in the resort, and trust me, there are many. Honestly speaking, resorts have the face of the tourists, not the country itself. The saying that some places seem less impressive when you have heard so many stories of the area, and for that, the Asian proverb \\"Better to see something once than hear about it a thousand times\\" is the truth you will understand going to places. Turkey is soo interesting to discover- a lot of European culture influence, but totally on its own cup of Turkish coffee.\\n\\nThe traffic\\nIstanbul is so chaotic, but at the same time, it\'s controlled chaos. Traffic is unbelievable, no way to say when is a specific time for traffic jams, cause it can happen any time. People drive their cars like they are always in a hurry. They squeeze cars into the smallest holes. They signal on everything while in traffic - saw a friend, to say hello, somebody is in a way, hurry somebody up, to tell others they are stupid - basically using the signal is the primary communication in Turkish traffic."}',
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
