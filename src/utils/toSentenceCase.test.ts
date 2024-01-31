import { toSentenceCase } from './toSentenceCase'

describe('toSentenceCase function', () => {
  it('converts a lowercase sentence to sentence case', () => {
    const input = 'hello world'
    const expectedOutput = 'Hello World'
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })
  
  it('handles empty string', () => {
    const input = ''
    const expectedOutput = ''
    expect(toSentenceCase(input)).toBe(expectedOutput)
  })
})
