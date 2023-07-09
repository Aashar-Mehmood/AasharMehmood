// Select all h3 tags
const h3Tags = document.querySelectorAll("#projects .desc h3");

// Find the h3 tag with the maximum number of characters

let maxCharacters = 0;
h3Tags.forEach((h3) => {
  const text = h3.innerHTML; // Remove leading/trailing whitespace
  const textLength = text.length;
  if (textLength > maxCharacters) {
    maxCharacters = textLength;
  }
});

// Insert non-breaking spaces in each h3 tag based on the difference in characters
h3Tags.forEach((h3) => {
  const text = h3.innerHTML; // Remove leading/trailing whitespace
  const textLength = text.length;
  const difference = maxCharacters - textLength;
  console.log(difference);

  const nbsp = "&nbsp;".repeat(difference);
  console.log(nbsp);
});
