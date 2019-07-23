const leaderboard = [
  ...document.querySelectorAll("#currentLeaderboard table tbody td a")
].map(a => a.href.split("/").pop());

if (leaderboard.length > 0) {
  appendDownloadLink(leaderboard, {
    element: document.querySelector("#currentLeaderboard h1"),
    filename: "leaderboard.csv"
  });
}

const myList = [...document.querySelectorAll("#yourList ol li a")].map(a =>
  a.href.split("/").pop()
);

if (myList.length > 0) {
  appendDownloadLink(myList, {
    element: document.querySelector("#yourList h1"),
    filename: "mylist.csv"
  });
}

function appendDownloadLink(
  ids,
  {
    text = "\u21E9 SAVE LETTERBOXD CSV",
    filename = "tmdb_ids.csv",
    element = document.body
  }
) {
  const link = document.createElement("a");
  link.style = "display: block; padding: 3px 10px; font-size: 50%;";
  link.textContent = text;
  link.download = filename;
  link.href = "data:text/csv,tmdbID\n" + ids.join("\n");
  element.appendChild(link);
}
