# Applitools Hackathon

Perfectly timed with lockdown and holiday! ☀️

## Dependencies Required

- Docker
- Docker Compose
- Node
- Yarn

## Getting Started

1 - Run `yarn` from the root to install dependencies

2 - Run tests using the following commands

``` javascript
 yarn test:traditionalTests:v1
 yarn test:traditionalTests:v2
```

### Technologies Used

- Cypress to intergrade and manipulate the Dom
- To run the tests in a repeatable way across machines or in CI
- Docker Compose to orchestrate running across browsers in parallels

### Time Spent

Traditional Approach - about 3 hours

### Shortcomings

Reporting -
I haven't completed the reporting to specification because personally, I feel cypress does a good enough job at leaving deterministic errors, screenshots and videos. (see screenshot)
I have dumped the docker-compose logs out into the named files required but I am aware this is not perfect.

Technology Choice -
I haven't used a VR tool for the traditional tests on purpose, this has lead to the cypress tests running on V2 not finding all the defects which highlight the benefits of VR testing.
