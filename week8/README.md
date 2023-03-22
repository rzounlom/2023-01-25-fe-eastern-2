<!-- Week 8 Lesson Plan -->

# CSS

## CSS Basics

- selecting elements: we can select elements by id, class name, element name (button, div, input, etc.) and more
- inline css
- relative reference style sheet (within the repo)
- external style sheet via CDN (Example Bootstrap)
- CSS Properties: work in key value pairs. Examples include: height, width, background-color, font-size, etc. You can find examples in the week 8 lesson folders: here is a reference to many css properties and how to use them: https://www.w3schools.com/css/.

NOTE: Although it's nice to know/memorize many different properties, it's better look them up as you need them.

- pseudo classes: allow us to style elements when they are in a specific state. A perfiect example is the hover pseudo class. instead of targeting the button you would declare the state of the button when the user hovers over it like this: button:hover

### The box model: padding, border, margin allow us to control the spacing and position of elements to create really nicely styled websites.

- padding: allows us to create space around the content within an element, but inside of the borders.
- border: allows us to modifly the style, color and with of the border of any element
- margin: allows to create space around elements. You can also spicify margins per side of an element

## Responsive Design: The priciples blocks of creating websites that look good on many devices

### Flexbox: allows us to create flexible and responsive layouts without the need of positioning or floats

- Reference: https://www.w3schools.com/css/css3_flexbox.asp
- display: flex; --> how to specify the use of flexbox within an element
- flex-direction: row | colum --> defines how the flex itmes are laid out. Row means the items will line up next to each other as inline items, whereas column will force the items to stack on top of one another
- justifiy-content: center | flex-start | flex-end | space-around | space-between --> how the flex items will behave horizontally
- align-items: center | flex-start | flex-end --> how the flex items will behave virtially
  ** NOTE **: justify-content and align-items are reversed when the flex-direction is set to column

### CSS Grid: A system to create website layouts that look good on all screens

- Reference: https://www.w3schools.com/css/css_grid.asp
- Will cover in week 9

### Media Queries: allow you to specify the styles of elements based on the screen size

## Putting it all together

-- create a reusable workflow for how you create your besites
-- walk through the sample_website (portfolio site) in the week 8 lessons folder

## Deploy static website

-- walk through a simple way to deploy static websites using github and netlify

## Resources

HTML

- w3Schools: https://www.w3schools.com/html/default.asp

Hands-on HTML and CSS learning

- freeCodeCamp html section: https://www.freecodecamp.org/learn/2022/responsive-web-design/

Responsive Design

- interneting is hard: https://www.internetingishard.com/

- Complete the apps on the freecodecamp responseive design section: https://www.freecodecamp.org/learn/2022/responsive-web-design/ (Certification projects)

Deployment(make website visible to the world wide web):

- deploy static website on github pages: https://blog.flycode.com/how-to-deploy-a-static-website-for-free-using-github-pages

- deploy static website on Netlify: https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/

Cool App for Responsive Design

- Responsively App: allows you to view your app on multiple devices at the same time. Here is the link to download it --> https://responsively.app/
