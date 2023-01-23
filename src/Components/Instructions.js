import React from 'react'
import { Card, Icon, Grid, Header, Image } from 'semantic-ui-react'
    
const Instructions = () => {
      return (
        <div>
            <Header size='huge'>Getting Started</Header>
            <Grid columns={4} divided>
                 <Grid.Row>
                   <Grid.Column>
                    <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>View Vinyl </Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                                <Card.Description>
                                    View Entire Vinyl Collect
                                </Card.Description>
                            </Card.Content>
                        </Card>
                   </Grid.Column>
                   <Grid.Column>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Add Vinyls</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            
                        </Card>
                   </Grid.Column>
                   <Grid.Column>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Update Vinyl</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                   </Grid.Column>
                   <Grid.Column>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Delete Vinyls</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
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
