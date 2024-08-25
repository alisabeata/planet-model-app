// Types for RA/DEC and Ecliptic coordinates
interface CelestialCoordinates {
  ra: string // RA in 'HH MM SS.ss' format
  dec: string // DEC in 'DD MM SS.s' format
}

interface EclipticCoordinates {
  eclipticLongitude: number // Ecliptic Longitude in degrees
  eclipticLatitude: number // Ecliptic Latitude in degrees
}

// Helper function to convert degrees to radians
function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180
}

// Helper function to convert radians to degrees
function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI
}

// Function to convert RA/DEC to Ecliptic coordinates
function convertRaDecToEcliptic(ra: string, dec: string): EclipticCoordinates {
  const obliquity = toRadians(23.44) // Obliquity of the ecliptic in radians

  // Convert RA and DEC to decimal degrees
  const [raHours, raMinutes, raSeconds] = ra.split(' ').map(Number)
  const [decDegrees, decMinutes, decSeconds] = dec.split(' ').map(Number)

  // Convert RA to degrees
  const raInDegrees =
    raHours * 15 + (raMinutes * 15) / 60 + (raSeconds * 15) / 3600

  // Convert DEC to decimal degrees
  let decInDegrees = decDegrees + decMinutes / 60 + decSeconds / 3600

  // Adjust for negative DEC
  if (decDegrees < 0) {
    decInDegrees = decDegrees - decMinutes / 60 - decSeconds / 3600
  }

  // Convert RA and DEC to radians
  const raRad = toRadians(raInDegrees)
  const decRad = toRadians(decInDegrees)

  // Calculate the Ecliptic Latitude (β) in radians
  const sinBeta =
    Math.sin(decRad) * Math.cos(obliquity) -
    Math.cos(decRad) * Math.sin(obliquity) * Math.sin(raRad)
  const beta = Math.asin(sinBeta)

  // Calculate the Ecliptic Longitude (λ) in radians
  const y =
    Math.sin(raRad) * Math.cos(obliquity) +
    Math.tan(decRad) * Math.sin(obliquity)
  const x = Math.cos(raRad)
  let lambda = Math.atan2(y, x)

  // Convert λ to degrees
  lambda = toDegrees(lambda)
  if (lambda < 0) {
    lambda += 360 // Ensure λ is in the range [0, 360)
  }

  // Convert β to degrees
  const betaDeg = toDegrees(beta)

  return { eclipticLongitude: lambda, eclipticLatitude: betaDeg }
}

// Example usage with the provided RA/DEC object
// const celestialCoords: CelestialCoordinates = { ra: '05 07 16.86', dec: '22 10 57.7' };
// const eclipticCoords: EclipticCoordinates = convertRaDecToEcliptic(celestialCoords.ra, celestialCoords.dec);

// console.log(`Ecliptic Longitude: ${eclipticCoords.eclipticLongitude.toFixed(2)}°`);
// console.log(`Ecliptic Latitude: ${eclipticCoords.eclipticLatitude.toFixed(2)}°`);

export default convertRaDecToEcliptic
