# Rocketseat's DoWhile'21 - Micro Front-ends Workshop

### by Victor Alencar

This is a example application developed during this workshop. It has the goal of implementing the Micro Front=ends Archtecture.
The 'host' receives all the other apps such as 'dsl' (design system, eg).

This project uses:

- scss
- tailwind css
- styled-components

Why? To show dependencies interactions and imports through whole application.

## Self-healing application concept

Webpack 5 Module Federation brings this 'power' to our apps! It makes the app 'self-healing', in other words, with the capactity
of correcting dependecies by itself at runtime - auto-correction.

- in this project we made a JS async loading system;
- it loads, imports, and renders at runtime;

### Possibilities

- if we have different versions of the same button;
- using of ErrorBoundary to catch some error on imports;
