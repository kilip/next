import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('<Layout/>', () => {

  it('should renders properly', () => {
    render(<Layout><h1>Hello World</h1></Layout>)

    expect(screen.getByRole('heading').textContent).toBe('Hello World')
  })
})
