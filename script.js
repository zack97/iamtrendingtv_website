document.addEventListener("DOMContentLoaded", function () {
  // Chargement de la dernière vidéo YouTube
  fetch(
    "https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&channelId=YOUR_CHANNEL_ID&part=snippet,id&order=date&maxResults=1"
  )
    .then((response) => response.json())
    .then((data) => {
      let videoId = data.items[0].id.videoId;
      document.getElementById(
        "latestVideo"
      ).src = `https://www.youtube.com/embed/${videoId}`;
    })
    .catch((error) =>
      console.log("Erreur lors du chargement de la vidéo :", error)
    );

  // Fonction de traduction
  window.translate = function (lang) {
    const translations = {
      fr: {
        title: "Bienvenue sur IamTrendingTV",
        description: "Découvrez les vidéos les plus tendances du moment !",
        subscribe: "S'abonner",
        "latest-video": "Dernière vidéo",
        "footer-text": "&copy; 2025 IamTrendingTV - Tous droits réservés",
      },
      en: {
        title: "Welcome to IamTrendingTV",
        description: "Discover the most trending videos of the moment!",
        subscribe: "Subscribe",
        "latest-video": "Latest Video",
        "footer-text": "&copy; 2025 IamTrendingTV - All rights reserved",
      },
    };

    document.getElementById("title").innerHTML = translations[lang]["title"];
    document.getElementById("description").innerHTML =
      translations[lang]["description"];
    document.getElementById("subscribe").innerHTML =
      translations[lang]["subscribe"];
    document.getElementById("latest-video").innerHTML =
      translations[lang]["latest-video"];
    document.getElementById("footer-text").innerHTML =
      translations[lang]["footer-text"];
  };
});
