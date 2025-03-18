document.addEventListener("DOMContentLoaded", function () {
  // Chargement de la dernière vidéo YouTube

  const apiKey = "AIzaSyAtPwKlAuIygPcACS_0Em_GuJ6T2kmNRZ8";
  const channelId = "UCSyTH1vIjPP3sVoYSRSrAOg";
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

  fetch(apiUrl) // Utilisation de la bonne URL API
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
});
