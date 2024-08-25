// Gets celestial coordinates (RA/DEC)

// RA is provided in hours, minutes, and seconds. To convert it to decimal degrees:
// Multiply the hours by 15 (since 1 hour = 15 degrees).
// Convert minutes to degrees by dividing by 4 (since 1 minute = 1/4 of a degree).
// Convert seconds to degrees by dividing by 240 (since 1 second = 1/240 of a degree).
// DEC is provided in degrees, minutes, and seconds. Convert it directly to decimal degrees.

// Define the types for the parsed data
interface HorizonsData {
  ra?: string
  dec?: string
  distance?: number
  apparentMagnitude?: number
  angularDiameter?: number
}

// Get celestial coordinates
function parseHorizonsData(rawData: string): HorizonsData {
  const parsedData: HorizonsData = {}

  // Extract Right Ascension and Declination
  const raDecRegex = /(\d{2} \d{2} \d{2}\.\d+) \+(\d{2} \d{2} \d+\.\d+)/
  const raDecMatch = rawData.match(raDecRegex)
  if (raDecMatch) {
    parsedData.ra = raDecMatch[1]
    parsedData.dec = raDecMatch[2]
  }

  // Extract distance (delta)
  const deltaRegex = /delta\s+(\d+\.\d+)/
  const deltaMatch = rawData.match(deltaRegex)
  if (deltaMatch) {
    parsedData.distance = parseFloat(deltaMatch[1])
  }

  // Extract apparent magnitude
  const apMagRegex = /APmag\s+(\d+\.\d+)/
  const apMagMatch = rawData.match(apMagRegex)
  if (apMagMatch) {
    parsedData.apparentMagnitude = parseFloat(apMagMatch[1])
  }

  // Extract angular diameter
  const angDiamRegex = /Ang-diam\s+(\d+\.\d+)/
  const angDiamMatch = rawData.match(angDiamRegex)
  if (angDiamMatch) {
    parsedData.angularDiameter = parseFloat(angDiamMatch[1])
  }

  return parsedData
}

export default parseHorizonsData
