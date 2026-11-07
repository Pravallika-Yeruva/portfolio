# Portfolio

Angular portfolio site for Pravallika Yeruva, built with standalone components and Angular CLI 22.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open `http://localhost:4200/`. The application will automatically reload whenever you modify a source file.

## Portfolio components

The page is assembled in `src/app/app.component.html` from standalone components in `src/app/components/`:

- `about-me` — introduction and social links
- `experience` — professional summary, skills, and work history
- `education` — education and work authorization
- `projects` — project cards
- `interests` — interests and technologies
- `footer` — copyright footer

Styles and Foundation assets are under `src/`. Replace the gradient profile and project-card artwork with real images by adding them under `public/assets/` and updating the component templates/styles.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
