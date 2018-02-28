# React Structure

A sample structure for React apps.

## Folder organization

### App

The App folder is the root application component.
It contains the global routing and includes the global CSS if needed

### Components

The components folder is made of three sub-folders

#### UI

ui are very simple reusable components that just embed style.

They must be stateless components.

It is supposed to be the Atom part of the atomic design.

They are organised by groups

Ex. Input and Textarea components are in the group Form

#### Functionnal

Functionnal components are components that embed logic.

They mainly are statefull components but can also be stateless.

They are organised by groups

### HOC

This folder contains all the HOC components used in the application.

### Dispatchers

Dispatchers are where all the redux dispatchers are placed

### Libs

Libs are helpers files that helps some behaviors in various components

### Reducers

Reducers are where all the redux reducers are placed

### Routes

The routes folder contains the code specific to routes.

The first folder is a global namespace {namespace} for the content. It can contain 3 kind of elements :
 - a component folder, which contains every route specific components
 - an index.js file, which dispatch to a sub-level of navigation
 - A folder by sub-level routes {route}.

In the end, every url is build this way:
 `#/{namespace}/{route}`

## Folder logic

A folder can contains several files:
 - React Component `Component.jsx`
 - Test File `Component.test.jsx`
 - Stylesheet `Component.css` or `Component.module.css` or `Component.scss`
 - Locales `Component.locales.json`
 - ...

Everything that is linked to a specific component should be in the same folder
