import { fireEvent, render } from '@testing-library/react'
import Counter from './Counter'

describe('Testing <Counter />', () => {
  it('should render counter correctly', () => {
    const { getByTestId, queryByTestId } = render(<Counter />)

    expect(queryByTestId('counter')).toBeNull()

    fireEvent.click(getByTestId('counter-increase'))
    expect(getByTestId('counter')).toBeInTheDocument()
    expect(getByTestId('counter').innerHTML).toBe('Counter: 1')

    fireEvent.click(getByTestId('counter-increase'))
    expect(getByTestId('counter').innerHTML).toBe('Counter: 2')

    fireEvent.click(getByTestId('counter-reset'))
    expect(queryByTestId('counter')).toBeNull()

    fireEvent.click(getByTestId('counter-increase'))
    expect(getByTestId('counter')).toBeInTheDocument()
    expect(getByTestId('counter').innerHTML).toBe('Counter: 1')
  })
})