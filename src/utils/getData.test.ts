import { getData } from './getData'

describe('getData function', () => {
  beforeEach(() => {
    jest.resetAllMocks() // Reset mock state before each test
  })

  it('fetches data successfully', async () => {
    // Mocking the fetch function to return a resolved promise with JSON data
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([{ planet: 'Earth' }]), // Mock JSON response
    })

    const data = await getData()

    expect(data).toEqual([{ planet: 'Earth' }]) // Check if data matches the expected result
    expect(fetch).toHaveBeenCalledTimes(1) // Ensure fetch was called once
    expect(fetch).toHaveBeenCalledWith(process.env.APP_URL, { method: 'GET' }) // Ensure fetch was called with the correct URL and method
  })
})
