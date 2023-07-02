const linkedinUrlRegex =
  /^https:\/\/www.linkedin.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i;

const url1 = "http://www.linkedin.com/in/pankajkar";
const url2 = "https://www.linkedin.com/in/jane-doe/";
const url3 = "https://www.linkedin.com/in/john_doe-123";
const url4 = "https://www.linkedin.com/in/john.doe";
const url5 = "https://www.linkedin.com/in/johndoe";
const url6 = "https://www.linkedin.com/in/john_doe123_456";

if (url1.match(linkedinUrlRegex)) {
  console.log(`${url1} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url1} is not a valid LinkedIn profile URL`);
}

if (url2.match(linkedinUrlRegex)) {
  console.log(`${url2} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url2} is not a valid LinkedIn profile URL`);
}

if (url3.match(linkedinUrlRegex)) {
  console.log(`${url3} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url3} is not a valid LinkedIn profile URL`);
}

if (url4.match(linkedinUrlRegex)) {
  console.log(`${url4} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url4} is not a valid LinkedIn profile URL`);
}

if (url5.match(linkedinUrlRegex)) {
  console.log(`${url5} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url5} is not a valid LinkedIn profile URL`);
}

if (url6.match(linkedinUrlRegex)) {
  console.log(`${url6} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url6} is not a valid LinkedIn profile URL`);
}
