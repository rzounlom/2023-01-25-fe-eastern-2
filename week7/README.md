Week 7 Lesson outline

# HTML Overview

- What is html and what is it used for?

## HTML File structure and tags

### Tags that make up all HTML documents

- <!DOCTYPE html> - declares the file is an HTML5 documents
- <html> - the root element which is the outermost parent tag. All ather elements must be placed inside the html element
- <head> - contains information or metadata about the HTML page such as the title and packages that may be reference from elsewhere on the internet
- <link> - tag which allows you to add other packages from the internet into you webpage, An example would be font-awsome or google fonts
- <title> - the title of the HTML page which is shown in the tab in the browser
- <body> - a container for all other elements other elements such as paragraphs, headings, anchor tags, lists, tables, etc.

  <!-- Tags that group and organize elements together and semantic html -->

- <header>
- <section>
- <div> -  block element with spans the length of its container unless by default
- <span> - a inline element, meaning it takes up as much space as the content inside of it and multiple can fit on the same line
- <footer>

### HTML comments

- vsCode shortcut: Window + / (forward slash)
<!-- this is how to comment html -->

### Commonly used tags

<!-- Tags for displaying text -->

- <h1> - heading tag; heading tags range from h1 -h6; h1 being the largest and h2 being the smallest
- <p> - paragraph tage for text
- <b> - adds bold to text in between the tag
- <i> - itliacs to text in between the tag
- <sup> - makes text appear half a character above the normal line
- <br> - creates a line break, or return within text or after any element

<!-- Tags for naviation within a website or to another website -->

- <a> - creates a hyper link to another website or another page or section within the same web page (takes absolute or relative paths)

<!-- Tags for displaying images -->

- <img> - allows us to render images within a webpage (takes absolute or relative paths)

<!-- Tags for creating a list -->

- <ol> - creates an ordered list using numbers
- <ul> - creates an unordered list using bullet points
- <li> - list items within an ol or ul tag. Usually contain links (anchor tags) when used for navigation.

<!-- Tags for creating a table -->

- <table> - outermost elemet of a table which defines the creation of a table in the HTML document. All other elements used to make a table must go inside of it.
- <tr> - creates a row within a table
- <th> - the table headers. You can create as many table headers as you wish. **Note**: make sure the table headers match the table data or <td>
- <td> - table data for each table header created

<!-- Tags that link javascript to your webpage -->

- < script > - enables us to link a js file to our html page; takes a relative or absolute path (src). Also useful for linking packages from the internet to our html document. An examples of this would be jquery, which we will go over in a future lesson.

<!-- Tags for creating forms -->

- <form> -  the outermost element for creating a form. All other form elements will go inside of this tag
- <input> - used to take in user input. taks in prams: type (the type of input: text, password, button, radio etc.), name (the name of the input; used in the request to give names to the input values), placeholder (the default text within an input; usually used to show users an example of what to type), required (users cannot submit the form unless some text has been added to the input)
- <button> - creates a button. Can be used inside or outside of a form

Cool resources for futher reading:

<!-- HTML -->

- w3Schools: https://www.w3schools.com/html/default.asp

<!-- Hands-on learning -->

- freeCodeCamp html section: https://www.freecodecamp.org/learn/2022/responsive-web-design/
