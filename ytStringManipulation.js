function youtubeNormalizer(inUrl){
  if(inUrl.includes("/embed/"))
    return inUrl
  else if(inUrl.includes("youtube.com/watch?v="))
    return inUrl.replace("watch?v=","embed/")
  else if (inUrl.includes("youtu.be/"))
    return inUrl.replace("youtu.be/","youtube.com/embed/")
}