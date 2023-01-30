# Model Javascript workspace

This repository provides an example that embodies my standard for how to setup a JS workspace. The goal is to envision a "JS workspace of the future": I want a stack of libraries, scripts, and websites that contain minimal boilerplate and are interoperable. That goal starts by throwing away old standards and tools: no CommonJS, no Webpack, no jQuery, and so on.

This current design reflects my experience on what works best for structuring a JS project. My recent JS experience comes from big projects like [Nota] and lots of smaller ones like [mdbook-quiz], [Aquascope], and [Flowistry].

Some notable aspects of the design:

* **Static typing:** all source files are written in [Typescript]. Static types are good, what else is there to say? And the JS community has coalesced around Typescript, so that's what I use.
* **Package management:** [pnpm] is the package manager and workspace executor. Its interface is similar to npm, but its nested/symlinked node_modules structure is a lot more sane. It helps catch errors where package A can use package B without listing B as a dependency (because B is a transitive dependency of a listed dependency C). It also reduces the disk usage of node_modules directories.
* **Websites:** the main principle for websites is to provide as little configuration as possible, and specify everything within the TS source files. I use [Vite] for bundling since it provides a number of nice conventions for this purpose, e.g. adding `?url` to an import path to bundle a file and get a URL to it.
    * **UI framework:** I use [React] as  UI framework, and sometimes [mobx] for complex data structures. React's super stable and there's a lot of libraries that integrate with it. It's easy to write modular React components. I've also heard good things about [Svelte] but haven't tried it yet.
    * **CSS:** I use [Sass] to write CSS, mostly for nesting rules and mixins. I used to use Sass variables, but these days I use [CSS variables] instead. I'm starting to use [CSS modules] to keep the CSS rules close to the components they describe.
* **Libraries:** the main principle for libraries is to do as little processing of the source as possible. A library should leave bundling to downstream applications, instead providing unminified & fully-documented files to support the IDE experience and debugging. Therefore my libraries simply use `tsc` to transpile each file individually into a directory-structure-equivalent output, with corresponding adjacent `.d.ts` files.
    * **Import paths:** with careful use of the `exports` field of `package.json`, this strategy enables nested imports. For example, if a file is at `browser-lib/src/components/button.ts`, this gets transpiled to `browser-lib/dist/components/button.js`. A re-export rule then allows downstream consumers to import `browser-lib/components/button`.
    * **Static assets:** the principle here is for libraries to use the same convention as the downstream bundler (currently [Vite]). So a library that needs an image imports the file with the path `icon.jpg?file`, and Vite is responsible for bundling the image. The library builder just needs to copy the image from the source directory to the appropriate place in the destination. A similar principle applies for CSS.
    * **Tests:** I use [Jest] with the [ts-jest] adapter. I've other Jest integrations like [esbuild-jest], but they are full of [horrendous hacks][jest-hack]. My kingdom for a way to write JS tests that isn't garbage.
* **Scripts:** for scripts, i.e. top-level entry points to JS either for Node or the browser, I use [esbuild] to bundle the source files into a single JS file that can be run as a Node executable, or provided to a `<script>` tag in the browser.

Note that this workspace omits some aspects like [formatting](https://prettier.io/), [linting](https://eslint.org/), and [documentation generation](https://typedoc.org/) that don't influence the structure of the repository.

The long-term goal for this workspace is to provide a gold standard for the kind of repo that [Graco] can automatically generate. 

[CSS variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[Svelte]: https://svelte.dev/
[Vite]: https://vitejs.dev/
[Typescript]: https://www.typescriptlang.org/
[Sass]: https://sass-lang.com/
[React]: https://reactjs.org/
[pnpm]: https://pnpm.io/
[mobx]: https://mobx.js.org/README.html
[Jest]: https://jestjs.io/
[CSS modules]: https://github.com/css-modules/css-modules
[esbuild]: https://esbuild.github.io/
[ts-jest]: https://kulshekhar.github.io/ts-jest/
[esbuild-jest]: https://github.com/aelbore/esbuild-jest
[jest-hack]: https://twitter.com/wcrichton/status/1525655175335014400
[Graco]: https://github.com/willcrichton/graco/
[Nota]: https://github.com/nota-lang/nota
[Aquascope]: https://github.com/cognitive-engineering-lab/aquascope
[mdbook-quiz]: https://github.com/cognitive-engineering-lab/mdbook-quiz
[Flowistry]: https://github.com/willcrichton/flowistry
