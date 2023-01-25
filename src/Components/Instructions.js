import React from 'react'
import { Card, Grid, Header, Image } from 'semantic-ui-react'
import addVinyl from '../asset/addVinyl.png'
import deleteVinyl from '../asset/deleteVinyl.jpg'
import viewVinyl from '../asset/viewVinyl.png'
import contactDev from '../asset/contactDev.png'
import details from '../asset/details.png'
import updateVinyl from '../asset/updateVinyl.png'

import '../css/instructions.css'

const Instructions = () => {
      return (
        <div style={{ backgroundImage: 'linear-gradient( #014872, #D7EDE1)' }}>
            <Header size='huge' style={{ padding:'1%', color: 'white', fontWeight: '800' }}>
                <h1 style={{ fontSize: '56px'}}>
                    Getting Started
                </h1>
                <hr></hr>
            </Header>
            <Grid container columns={3} stackable centered style={{ padding:'1vw' }}>
                 <Grid.Row>
                   <Grid.Column>
                    <Card className='instruction-card'>
                            <Image src={viewVinyl} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>View Vinyl </Card.Header>
                                <hr></hr>
                                <Card.Description>
                                    You are able to view the entire vinyl collection by selecting the yellow "View Vinyls" button at the top of the screen. You can return to the home screen by click the vinyl icon image.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                   </Grid.Column>
                   <Grid.Column>
                        <Card className='instruction-card'>
                            <Image src={addVinyl} wrapped ui={false} fluid size='huge'/>
                            <Card.Content>
                                <Card.Header>Add Vinyls</Card.Header>
                            <hr></hr>
                                <Card.Description>
                                    Add a new vinyl by selecting the blue "Add Vinyl" button. Enter Arist Name, Album Name, Release Year, Record Label, Any Notes, and the Album Cover Image then click submit. 
                                </Card.Description>
                            </Card.Content>
                        </Card>
                   </Grid.Column>
                   <Grid.Column>
                        <Card className='instruction-card'>
                            <Image src={updateVinyl} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Update Vinyl</Card.Header>
                                <hr></hr>
                                <Card.Description>
                                    Update a existing vinyl by selecting the purple "Update" button. Update the Arist Name, Album Name, Release Year, Record Label, Notes, and the Album Cover Image then click submit. 

                                </Card.Description>
                            </Card.Content>
                        </Card>
                   </Grid.Column>
                   
                 </Grid.Row>
                 <Grid.Row>
                    <Grid.Column>
                        <Card className='instruction-card'>
                            <Image src={details} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>View Details</Card.Header>
                            <hr></hr>
                                <Card.Description>
                                    You are able to see the vinyl's additional details by clicking the green "View Details" buttom to reveal a modal with the Release Year, Record Label, and any Notes.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card className='instruction-card'>
                        <Image src={deleteVinyl} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Delete Vinyls</Card.Header>
                            <hr></hr>
                                <Card.Description>
                                    Vinyls can be removed from the Vinyl database by clicking the green "View Details" button, and then clicking the red "Delete" button and confirming by clicking "Ok".
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card className='instruction-card'>
                            <Image src={contactDev} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Contact Dev</Card.Header>
                            <hr></hr>
                                <Card.Description>
                                    Like what you see? Feel free to reach to the Developer by clicking the black "Contact Dev" button to gain access to their LinkedIn, Github, Portfolio, and more!
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                 </Grid.Row>

            </Grid>
        </div>
      )
    }
    
    export default Instructions
