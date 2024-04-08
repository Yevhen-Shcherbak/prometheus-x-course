export default function bookNameShortener(string) {
  if (string.length >= 24) {
    let shortenedString = string.substring(0, 24);
    return shortenedString += '...'
  }
  return string;
};