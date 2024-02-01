# Planet Model App

An astronomy application uses the NASA API and NASA HORIZON API to provide a model of the current positions of the planets on their orbits in real-time, with detailed information available by clicking on each planet.

Technologies: TypeScript, React, Next.js, Jest, React Testing Libruary.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.


### Start Dev Server

```bash
npm run dev
```

### Running Tests

```bash
npm test

npm run test -- -u // to update snapshot
```

### Build

```bash
npm run build
```


## Description

The `app` directory contains routing elements.

The `components` directory contains main functional blocks of the application.

The `utils` directory contains the primary calculations.

`getOrbitalPosition` calculates the orbital position of a planet based on its orbital elements. It utilizes Kepler's equations to determine the planet's position along its orbit in Cartesian coordinates (x, y). The function takes a planet object of type PlanetsType as input and returns an object containing the calculated orbital position.
x: The x-coordinate of the planet's orbital position.
y: The y-coordinate of the planet's orbital position.
r: The distance from the planet to the center of the orbit.
v: The true anomaly, representing the angular distance of the planet from the perihelion along its orbit.

`getPlanetId` obtains the relevant ID needed for the NASA HORIZON API.

