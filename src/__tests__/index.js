//import { render, screen, waitFor, wait} from '@testing-library/react';
// import Gif from 'components/Gifs/Gifs';
// import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import App from '../App';

const { render, fireEvent, screen } = require("@testing-library/react")

// test('home work as expeted', async () => {
//   const {container} = render(<App />)
//   const gifLink = await waitFor(
//     ()=> container.querySelectorAll('.Gif-link')
//   )

//   expect(gifLink).toBeVisible()
  
// });

test('search form could be used', async() => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')
  
  fireEvent.change(input, {target: {value: 'Matrix'}})
  fireEvent.click(button)

  const title = await screen.findByText('Gifs de Matrix')
  expect(title).toBeVisible()
})
