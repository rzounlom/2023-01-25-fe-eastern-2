<!-- Week 13  -->

# Intro To React

    - react docs --> https://react.dev/
    - react tutorial from docs -> https://react.dev/learn

## Webpack

- Purpose: bundle JS modules into one/a few bundles to statically serve your content
- Installing Versions from the video
  -- webpack --> npm i -D webpack@4.43.0
  -- webpack-cli --> npm i -D webpack-cli@3.3.12
  -- jquery --> npm i jquery@3.5.1
  -- webpack docs --> https://webpack.js.org/

## Webpack React Manual Setup

- Info: we can setup our react development environment manually with webpack and a few react packages(not as common as using create-react-app or similar tools)
- Please take a look at the example in the webpack-react-manually folder for example manual setup.

## Create React App

- Purpose: creates a development environment for react setup with webpack and standard boilerplate. This takes away the need to manually setup react using webpack. It also comes setup with jest(testing library)
- Installation:
  -- create-react-app --> npx create-react-app <projectname>
- Folder/files structure:
  -- index.js --> entry point for our react app. We add any configurations we may need as well and render our main app here.
  -- public --> holds our index.html(where our react app is mounted), as well as assets such as images, icons, etc.
  -- .gitignore --> specifies files we do not want pushed to our remote github repo. Things such as node_modules, api keys, etc. should not be pushed to github since we don't them to be available publicly.
  -- src directory --> contains our project files such as components and js modules
  -- components --> optional, but usually holds our react components that make up our app
  --scripts --> allows us to run application commands in the terminal using the
  -- create-react-app-docs --> https://create-react-app.dev/

  ## React Componets

  - Purpose: allow us to break down our app into smaller pieces that can contain their own state and styling. Component can be created once then imported and used anywhere in the app.
  - JSX: allows us to use html and javascript within the same file. We will be using JSX exclusively. Please refer to the my-app-no-jsx example to see the React.createElement version of the app as that style is no longer used today.
  - Class vs Function Components
    -- Class Components --> allow us to create react components and maintain their state. We used to only be able to maintain state with class components, but that has changed in more recent React versions. Class components are still used, but not as common since we can now hold state in Functional Components
    -- Function Components --> allow us to create react components and maintain their state. Functional components are jsvascript functions that allow us to create react components and maintain state within those components. They are much cleaner to write/understand that class components.

## React App workflow

-- project setup
-- folder structure setup
-- breakdown app into components
-- create components and styling
