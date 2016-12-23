export default function checkImageURL(url="") {
  return url.match(/\.(gif|jpg|jpeg|tiff|png)$/i);
}
