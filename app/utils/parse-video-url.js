export default function parseVideoURL(url="") {
  let url_video = url;
  if (url.match('(?:(?:http|https):\/\/)?(?:www.)?youtube.com\/?')) {
    url_video = url.replace("watch?v=", "embed/");
  } else if(url.match('(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?')){
    url_video = `/ui/fb-video.html?url=${url}`;
  } else if (url.match('(?:(?:http|https):\/\/)?(?:www.)?vimeo.com\/?')){
    url_video = url.replace("//vimeo.com/", "//player.vimeo.com/video/");
  }
  return url_video;
}
