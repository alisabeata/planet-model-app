import { PlanetsType } from '@/types/planets.type'

export function getOrbitalPosition(planet: PlanetsType): {
  x: number
  y: number
  r: number
  v: number
} {
  if (!planet.elements) return { x: 0, y: 0, r: 0, v: 0 }

  // Constants
  const TWO_PI = 2 * Math.PI

  // Mean motion (n = 2π / T)
  const n = TWO_PI / planet.elements.period

  // Mean anomaly (M)
  let M = planet.elements.meanAnomalyAtEpoch + n * planet.elements.epoch
  M = M % TWO_PI // Normalize to 0-2π

  // Solve Kepler's equation for Eccentric Anomaly (E)
  let E = M,
    delta = 0.05,
    epsilon = 1e-6
  do {
    let E0 = E
    E =
      E -
      (E - planet.elements.eccentricity * Math.sin(E) - M) /
        (1 - planet.elements.eccentricity * Math.cos(E))
    delta = Math.abs(E - E0)
  } while (delta > epsilon)

  // True anomaly (ν)
  const v =
    2 *
    Math.atan2(
      Math.sqrt(1 + planet.elements.eccentricity) * Math.sin(E / 2),
      Math.sqrt(1 - planet.elements.eccentricity) * Math.cos(E / 2),
    )

  // Distance (r)
  const r =
    planet.elements.semiMajorAxis *
    (1 - planet.elements.eccentricity * Math.cos(E))

  // Position in orbit
  const x = r * Math.cos(v)
  const y = r * Math.sin(v)

  return { x, y, r, v }
}
