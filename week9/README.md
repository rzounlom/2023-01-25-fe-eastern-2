<!-- Week 9 Lesson Plan -->

# Bootstrap

## Setup

- init new npm project using command "npm init -y" in the terminal in the root of your project
- install bootstrap version 4.4.1(used in the videos) using command "npm i bootstrap@4.4.1
- you can also import bootstrap by using the bootstrap CDN(Content Deliver Network). Link to 4.4.1 Docs: https://getbootstrap.com/docs/4.4/getting-started/introduction/
- install jquery version 3.4.1 using command "npm i jquery@3.4.1"
  NOTE: you can install multiple dependencies at the same time. For example, you can install both jquery and bootstrap with the command "npm i bootstrap@4.4.1 jquery@3.4.1"
- add link to bootrap css file in the head section of your html document: <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css"
    />
- add the jquery and botstrap script tags to the bottom(before the closing body tag) of the body body of your html document:
  <script src="node_modules/jquery/dist/jquery.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
- add a bootstrap class somewhere in your body to test that everything is working/connected

## Bootstrap Basics

- layout --> containers
- navbars
- grid system rows and columns
- cards
- carousel
- modals
