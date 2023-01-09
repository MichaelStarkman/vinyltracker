import React from 'react';
import { Button, Modal, Header, Image } from 'semantic-ui-react';



const ModalComp = ({
    open, 
    setOpen, 
    img, 
    artistName, 
    albumTitle, 
    releaseYear, 
    label, 
    notes, 
    id, 
    handleDelete
}) => {
  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>Details</Modal.Header>
        <Modal.Content image>
            <Image 
                size='huge'
                src={img}
                wrapped
                style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "15%",
                    }}
            />
            <Modal.Description>
                <Header>
                    {albumTitle} by {artistName}
                </Header>
                <p>Artist: {artistName}</p>
                <p>Album: {albumTitle}</p>
                <p>Release Year: {releaseYear}</p>
                <p>Label: {label}</p>
                <p>Notes: {notes}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button
                color='grey'
                onClick={() => setOpen(false)}
            >
                Cancel
            </Button>
            <Button
                color='red'
                content='Delete'
                labelPosition='right'
                onClick={() => handleDelete(id)}
                icon='delete'
            />
        </Modal.Actions>
    </Modal>
  )
}

export default ModalComp