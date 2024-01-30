export const getDateNow = (): string => {
  const currentDate = new Date()

  // Extract year, month, and day from the date
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Month is zero-based, so we add 1
  const day = String(currentDate.getDate()).padStart(2, '0')

  // Format the date as 'YYYY-MM-DD'
  const formattedDate = `${year}-${month}-${day}`

  return formattedDate
}
