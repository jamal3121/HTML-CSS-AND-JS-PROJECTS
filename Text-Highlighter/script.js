function search() {
  //Getting input from the Text Box
  let textToSearch = document.getElementById("text-to-search").value;

  //The Paragraph that we used to check the search element
  let paragraph = document.getElementById("paragraph");

  textToSearch = textToSearch.replace(/[.**?^${}()|[\]\\]/g, "\\$&");
  /* Here, textToSearch is processed to escape any special characters that might be interpreted by the regular expression engine. The replace method uses a regular expression to find special characters (like ., *, ?, etc.) and prepends a backslash (\) to them. This ensures that these characters are treated as literal text rather than special characters in the regular expression pattern.*/
  let pattern = RegExp(`${textToSearch}`, "gi");
  /*This line creates a regular expression object with the escaped textToSearch value. The RegExp constructor is used to create the pattern dynamically. The "gi" flags indicate that the search should be global (find all matches) and case-insensitive.*/

  paragraph.innerHTML = paragraph.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
  /*This line performs the following operations:
    1.paragraph.textContent :- retrieves the text content of the paragraph element without any HTML formatting.

    2.replace(pattern, match => <mark>${match}</mark>) :- uses the regular expression pattern to find matches in the text content and replaces each match with a highlighted version. The replacement involves wrapping the matched text with <mark> tags, which typically highlight text in yellow.
    
    3.paragraph.innerHTML :-sets the inner HTML of the paragraph element to the new content with highlighted matches. This effectively updates the paragraph element to show the highlighted search results.*/
}
