import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Loader} from 'semantic-ui-react';
import { storage, db } from '../firebase';
import { useParams, useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp, doc, getDoc, updateDoc } from 'firebase/firestore';

const initialState = {
    artistName: "",
    albumTitle: "",
    releaseYear: "",
    label: "",
    notes: ""
}

const AddEditVinyl = () => {
    // vinyl data
    const [data, setData] = useState(initialState);
    const {artistName, albumTitle, releaseYear, label, notes} = data;
    // image file
    const [file, setFile] = useState(null);
    // check if image has uploaded on firebase
    const [progress, setProgress] = useState(null);
    // form validation/check for errors
    const [errors, setErrors] = useState({});
    // check if form is submitted or not
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    // useEffect will only run once there is an id
    useEffect(() => {
        id && getSingleRecord();
    }, [id])

    const getSingleRecord = async () => {
        const docRef = doc(db, 'records', id);
        const snapshot = await getDoc(docRef);
        if(snapshot.exists()) {
            setData({...snapshot.data()});
        }
    };


    // useEffect will only run when user uploads file
    useEffect(() => {
        const uploadFile = () => {
          const name = new Date().getTime() + file.name;
          const storageRef = ref(storage, file.name);
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          uploadTask.on("state_changed", (snapshot) => {
            // check image upload progress
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            // use switch case to track image upload
            switch (snapshot.state) {
              case "paused":
                console.log('Upload has been Paused');
                break;
              case "running":
                console.log('Upload is Running');
                break;
              default:
                break;
            }
          }, (error) => {
            console.log(error)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // update state
              setData((prev) => ({...prev, img: downloadURL}))
            })
          }
        );
      };
      // check file and run uploadFile funciton
      file && uploadFile();
      }, [file]);


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        //setData({...data, [e.target.artistName]: e.target.value})
    };

    const validate = () => {
        let errors = {};
        // UX Errors
        if(!artistName){
            errors.artistName = "Artist Name is Required"
        }
        if(!albumTitle){
            errors.albumTitle = "Artist Name is Required"
        }
        // Might make the below not required
        if(!releaseYear){
            errors.releaseYear = "Album Release Year is Required"
        }
        if(!label){
            errors.label = "Record Label is Required"
        }
        if(!notes){
            errors.notes = "Notes are Required"
        }
        // if(!file){
        //     errors.file = "Image is Required"
        // }
        return errors;
    }
    // validate form component
    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = validate();
        if(Object.keys(errors).length) return setErrors(errors);
        setIsSubmit(true);
        if(!id) {
            try {
                await addDoc(collection(db, "records"), {
                    ...data,
                    timestamp: serverTimestamp()
                })
            } catch (error) {
                console.log(error);
            }
           
        } else {
            try {
                await updateDoc(doc(db, "records", id), {
                    ...data,
                    timestamp: serverTimestamp()
                })
            } catch (error) {
                console.log(error);
            }
        }        
        navigate('/');
    };
  return (
    <div>
        <Grid 
            centered
            verticalAlign='middle'
            columns="3"
            style={{
                height: "80vh"
            }}
        >
            <Grid.Row>
                <Grid.Column
                    textAlign='center'
                >
                    <div>
                        {isSubmit ? <Loader active inline='centered' size='huge'/>: (
                            <>
                                <h2>{id ? `Update Vinyl` : "Add New Vinyl"}</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Input
                                        label='Artist Name'
                                        error={errors.artistName ? {content: errors.artistName} : null}
                                        placeholder='Enter Artist Name'
                                        name="artistName"
                                        onChange={handleChange}
                                        value={artistName}
                                        autoFocus
                                    />
                                    <Form.Input
                                        label='Album Title'
                                        error={errors.albumTitle ? {content: errors.albumTitle} : null}

                                        placeholder='Enter Album Title'
                                        name="albumTitle"
                                        onChange={handleChange}
                                        value={albumTitle}
                                    />
                                    <Form.Input
                                        label='Release Year'
                                        error={errors.releaseYear ? {content: errors.releaseYear} : null}

                                        placeholder='Enter Year was Ablum was Released'
                                        name="releaseYear"
                                        onChange={handleChange}
                                        value={releaseYear}
                                    />
                                    <Form.Input
                                        label='Record Label'
                                        error={errors.label ? {content: errors.label} : null}

                                        placeholder='Enter Record Label'
                                        name="label"
                                        onChange={handleChange}
                                        value={label}
                                    />
                                    <Form.TextArea
                                        label='Notes'
                                        error={errors.notes ? {content: errors.notes} : null}

                                        placeholder='Enter Album Title'
                                        name="notes"
                                        onChange={handleChange}
                                        value={notes}  
                                    />
                                    <Form.Input 
                                        label='Upload'
                                        type='file'
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button
                                        primary
                                        type='submit'
                                        disabled={progress !== null && progress < 100}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </>
                        )}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
  )
}

export default AddEditVinyl;