import { getDateNow } from './getDateNow'

describe('getDateNow function', () => {
  it('returns the current date in "YYYY-MM-DD" format', () => {
    // Mock the current date to a fixed value for testing purposes
    const mockDate = new Date('2024-01-30T12:00:00')
    const originalDate = global.Date
    global.Date = jest.fn(() => mockDate) as unknown as typeof Date

    // Call the function and expect the result
    expect(getDateNow()).toBe('2024-01-30')

    // Restore the original Date object
    global.Date = originalDate
  })
})
