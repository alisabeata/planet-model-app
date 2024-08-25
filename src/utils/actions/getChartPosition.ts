function getChartPosition(eclipticLongitude: number) {
  const degreesPerSign = 30 // Each zodiac sign spans 30 degrees

  // Determine the zodiac sign
  const signIndex = Math.floor(eclipticLongitude / degreesPerSign)
  const degreeWithinSign = eclipticLongitude % degreesPerSign

  // Convert ecliptic longitude to an angle in a 360-degree circle
  const angleInChart = signIndex * degreesPerSign + degreeWithinSign

  return angleInChart // Angle in the 360-degree circle
}

// Example usage:
// const eclipticLongitude = 82.94425620745682;
// const angleInChart = getChartPosition(eclipticLongitude);

// console.log(`The planet should be placed at ${angleInChart.toFixed(2)}° on the natal chart.`);

export default getChartPosition
