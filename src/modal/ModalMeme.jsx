import { createPortal } from 'react-dom'

export function ModalMeme ({ meme }) {
  return createPortal(
    <>
      <div className='modalMeme'>
        <figure>
          <img src={meme} />
        </figure>

        <p>a rockear</p>
      </div>
    </>,
    document.body
  )
}
