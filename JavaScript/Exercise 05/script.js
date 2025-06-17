function createCard(title, channel, views, months_old, duration, thumbnail) {
  let title_ = document.getElementById("title");
  title_.innerText = title;

  let channel_ = document.getElementById("channel");
  channel_.innerText = channel;

  let views_ = document.getElementById("views");
  views_.innerText = views;

  let months_old_ = document.getElementById("months_old");
  months_old_.innerText = months_old;

  let duration_ = document.getElementById("duration");
  duration_.innerText = duration;

  let thumbnail_ = document.getElementById("thumbnail");
  thumbnail_.src = thumbnail;
}

createCard(
  "hello and welcome to my  guys",
  "anurag salgaonkar",
  "200k",
  "10 months old",
  "13:88",
  "https://i.ytimg.com/vi/eEeX2QMlSlo/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuGAwaBlMy3zRKWKe0jmZqLgVpBg"
);

let div = document.createElement("div");
div.className = "hello";
div.innerHTML = "<span>hello</span>";
document.body.append(div);

createCard(
  "hello and welcome to my  guys",
  "anurag salgaonkar",
  "200k",
  "10 months old",
  "13:88",
  "https://i.ytimg.com/vi/eEeX2QMlSlo/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuGAwaBlMy3zRKWKe0jmZqLgVpBg"
);
