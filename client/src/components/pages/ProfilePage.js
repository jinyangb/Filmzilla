import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../globals'
import { Card, Button } from 'react-bootstrap'
import Client from '../../services'

function ProfilePage(props) {
  const [getProfile, setProfileInfo] = useState([])

  const getProfileInfo = async () => {
    try {
      const res = await Client.get(`${BASE_URL}/myprofile/${props.user.id}`)
      setProfileInfo(res.data)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getProfileInfo()
  }, [])

  console.log(getProfile)
  return (
    <div>
      Profile Page
      {/* {getProfile.map((profile) => (
        <Card className="text-center">
          <Card.Header>My Profile</Card.Header>
          <Card.Body>
            <Card.Title>Username:{profile.username}</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      ))} */}
    </div>
  )
}

export default ProfilePage
