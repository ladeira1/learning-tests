import { fireEvent, render } from '@testing-library/react'
import Name from '.'

describe('Testing <Name />', () => {
  it('should render name correctly', () => {
    const { getByTestId, queryByTestId } = render(<Name />)

    expect(getByTestId('name-input').innerHTML).toBe('')
    expect(queryByTestId('name')).toBeNull()

    fireEvent.change(queryByTestId('name-input'), { target: { value: 't'} } )
    expect(queryByTestId('name')).toBeInTheDocument()
    expect(getByTestId('name').innerHTML).toBe('Hello, t')

    fireEvent.change(queryByTestId('name-input'), { target: { value: 'test' } })
    expect(getByTestId('name').innerHTML).toBe('Hello, test')

    fireEvent.change(queryByTestId('name-input'), { target: { value: '' } })
    expect(queryByTestId('name')).toBeNull()
  })
})