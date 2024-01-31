import { toSentenceCase } from './toSentenceCase'

describe('toSentenceCase function', () => {
  it('converts a lowercase sentence to sentence case', () => {
    const input = 'hello world'
    const expectedOutput = 'Hello World'
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })

  it('preserves sentence case for a mixed-case sentence', () => {
    const input = 'HeLLO WOrld'
    const expectedOutput = 'Hello World'
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })

  it('handles empty string', () => {
    const input = ''
    const expectedOutput = ''
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })

  it('handles single-word strings', () => {
    const input = 'hello'
    const expectedOutput = 'Hello'
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })

  it('handles strings with numbers', () => {
    const input = '12345'
    const expectedOutput = '12345'
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })
})
