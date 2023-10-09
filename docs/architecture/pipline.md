## Github
A developer first creates an emoji repository on github, puts the code and commits it.
Repository is connected to CircleCi and fired whenever a developer pushes a change to the connected repository.

## CircleCi
The *.circleci/config.yml* file needs to be in the root folder so that CircleCi can read it and perform its two main tasks: build and deploy for both the backend and frontend.

## Pipeline

From the root of the project:
- `npm run frontend:install`    - To install frontend dependencies.
- `npm run frontend:build`      - To build the Angular/Frontend.
- `npm run frontend:lint`       - To lint the Angular/Frontend.
- `npm run frontend:e2e`        - To e2e the Angular/Frontend.
- `npm run frontend:deploy`     - To deploy the project to S3 using deploy script.
- `npm run api:install`         - To install backend dependencies.
- `npm run api:build`           - To transpile the Typescript/Backend.
- `npm run api:deploy`          - To deploy the project to EB using deploy script.
