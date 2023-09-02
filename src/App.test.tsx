import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';

describe('App', () => {
  it('test', async () => {
    const utils = render(<App />);
    // error
    // const textField = await utils.findByRole('textbox')
    const textField = await utils.findByLabelText('date')
    await userEvent.type(textField, '2023-09-02')
    expect(textField).toHaveValue('2023-09-02')
  });
});  