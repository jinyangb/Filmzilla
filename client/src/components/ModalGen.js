import { Modal, Button } from 'react-bootstrap'
import { React } from 'react'

function ModalGen(props) {
  
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Are you sure you want to {props.action}?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {props.function(); props.onHide()}}>
          {props.buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalGen