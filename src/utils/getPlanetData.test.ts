import { getPlanetData } from './getPlanetData'

describe('getPlanetData function', () => {
  beforeEach(() => {
    jest.resetAllMocks() // Reset mock state before each test
  })

  it('fetches planet data successfully', async () => {
    // Mocking necessary functions and environment variables
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ result: 'Mock planet data \\n' }),
    }
    global.fetch = jest.fn().mockResolvedValue(mockResponse)

    // Call the function
    const result = await getPlanetData('Pluto')

    // Expectations
    expect(result).toBe('Mock planet data \n')
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object))
  })
})
