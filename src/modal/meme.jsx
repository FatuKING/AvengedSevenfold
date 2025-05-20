import { createPortal } from 'react-dom'

export function ModalImg () {
  return createPortal(
    <>
      <div className='modalMain'>
        <figure className='modalContenedor rounded shadow-lg tilt-in-top-1'>
          <img className='modalImg rounded shadow-lg' src='/meme.jpg' />
        </figure>
      </div>
    </>,
    document.body
  )
}
