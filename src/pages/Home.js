import React, { useEffect, useState } from 'react';
import {db} from '../firebase';
import { Button, Card, Container, Grid, Image} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';
import ModalComp from '../Components/ModalComp';
import Spinner from '../Components/Spinner';


const Home = () => {
    // Define State
    const [records, setRecords] = useState([]);
    const [open, setOpen] = useState(false);
    const [record, setRecord] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // When app loads, display all records in fs db
    useEffect(()=>{
        setLoading(true);
        const unsub = onSnapshot(collection(db, 'records'), (snapshot)=> {
            let list = [];
            snapshot.docs.forEach((doc)=>{
                list.push({id: doc.id, ...doc.data()})
            });
            setRecords(list);
            setLoading(false)
        }, (error) => {
            console.log(error);
        }
    );
    return () => {
        unsub();
    }
    }, []);

    // show spinner when loading 
    if(loading) {
        return <Spinner />
    }

    // Modal Function
    const handleModal = (item) => {
        setOpen(true);
        setRecord(item);
    }
    // Delete Function
    const handleDelete = async (id) => {
        // window pop up confirm
        if(window.confirm("Are you sure you want to delete this record?")) {
            try {
                setOpen(false);
                await deleteDoc(doc(db, 'records', id))
                setRecords(records.filter((record) => record.id !== id))
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (

        <Container textAlign='center'>
           
           <Grid columns={3} stackable>
                    {records &&
                        records.map((item) => (
                            <Grid.Column key={item.id}>
                            <Card >
                                <Card.Content>
                                    <Image 
                                        src={item.img}
                                        size='medium'
                                        style={{
                                        height: "150px",
                                        width: "150px",
                                        borderRadius: "50%",
                                        }}
                                    />
                                    <Card.Header style={{
                                        marginTop: '10px'
                                    }}>
                                        {item.artistName}
                                    </Card.Header>
                                    <Card.Description>{item.albumTitle}</Card.Description>
                                </Card.Content>
                                <Card.Content
                                    extra
                                >
                                    <div>
                                        <Button
                                            color='green'
                                            onClick={() => navigate(`/update/${item.id}`)}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            color='purple'
                                            onClick={() => handleModal(item)}
                                        >
                                            View
                                        </Button>
                                        {open &&
                                            <ModalComp 
                                                open={open}
                                                setOpen={setOpen}
                                                handleDelete={handleDelete}
                                                {...record}
                                            />
                                        }
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))}
                </Grid>
            
        </Container>

    )
}

export default Home