/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import Layout from '@/app/layout'
import Page from '@/app/page'

it('render Layout', () => {
  const { container } = render(<Layout>Test</Layout>)
  expect(container).toMatchSnapshot()
})
