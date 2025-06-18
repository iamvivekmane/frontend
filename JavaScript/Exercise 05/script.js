function createCard(title, img, channel, views, months_old, duration) {
        let cardContainer = document.getElementById("card-container");

        let container = document.createElement("div");
        container.classList.add("container");

        let length = document.createElement("div");
        length.classList.add("duration");
        length.textContent = duration;

        let image = document.createElement("div");
        image.classList.add("thumbnail");
        let thumb = document.createElement("img");
        thumb.src = img;
        image.appendChild(thumb);
        image.appendChild(length);

        let heading = document.createElement("span");
        heading.classList.add("title");
        heading.textContent = title;

        let description = document.createElement("div");
        description.classList.add("desc");

        let list = document.createElement("ul");
        description.appendChild(list);

        let Cname = document.createElement("li");
        Cname.textContent = channel;
        Cname.id = "chnl";
        list.appendChild(Cname);

        let watched = document.createElement("li");
        if (views >= 1000000000) {
          let converted = (views / 1000000000).toFixed(0) + "B";
          watched.textContent = converted;
        } else if (views >= 1000000) {
          let converted = (views / 1000000).toFixed(0) + "M";
          watched.textContent = converted;
        } else if (views >= 1000) {
          let converted = (views / 1000).toFixed(0) + "K";
          watched.textContent = converted;
        } else {
          watched.textContent = views.toString();
        }
        list.appendChild(watched);

        let months = document.createElement("li");
        months.textContent = months_old;
        list.appendChild(months);

        container.appendChild(image);
        container.appendChild(heading);
        container.appendChild(description);
        cardContainer.appendChild(container);
      }
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );
      createCard(
        "Shubh - Supreme (Official Music Video)",
        "https://i.ytimg.com/vi/YDDjAE13oKw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYVCBlKFUwDw==&rs=AOn4CLAliae8Oe3YVOIgV-fLQ8kkUIquUA",
        "SHUBH",
        48153895,
        "2 months ago",
        "2:55"
      );