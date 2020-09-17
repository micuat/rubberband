// module.exports = function youtubeNormalizer(inUrl){
//   if(inUrl.includes("/embed/"))
//     return inUrl
//   else if(inUrl.includes("youtube.com/watch?v="))
//     return inUrl.replace("watch?v=","embed/")
//   else if (inUrl.includes("youtu.be/"))
//     return inUrl.replace("youtu.be/","youtube.com/embed/")
// }

// https://stackoverflow.com/questions/21607808/convert-a-youtube-video-url-to-embed-code
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

module.exports = function(url) {
  if (url.match(/youtube.com/) || url.match(/youtu.be/)) {
    const id = getId(url);
    if (id == null) return url;
    return `https://www.youtube.com/embed/${id}`;
  } else {
    return url;
  }
};
