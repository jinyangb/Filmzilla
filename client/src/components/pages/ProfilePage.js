// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import { BASE_URL } from '../../globals'
// import { Card, Button } from 'react-bootstrap'
// import Client from '../../services'

// function ProfilePage(props) {
//   const [getProfile, setProfileInfo] = useState([])

//   const getProfileInfo = async (id) => {
//     try {
//       const res = await Client.get(`${BASE_URL}/myprofile/${id}`)
//       setProfileInfo(res.data)
//     } catch (error) {
//       throw error
//     }
//   }

//   useEffect(() => {
//     getProfileInfo(props.user.id)
//   }, [props.user.id])

//   return (
//     <div>
//       Profile Page

//       <Card className="text-center">
//         <Card.Header>My Profile</Card.Header>
//         <Card.Body>
//           <Card.Title>Username: {getProfile.username}</Card.Title>
//           <Card.Title>Email: {getProfile.email}</Card.Title>
//         </Card.Body>
//         <Card.Footer className="text-muted">
//           Last Login Date: {getProfile.updatedAt}
//         </Card.Footer>
//       </Card>
//       <Card className="text-center">
//         <Card.Header>My Reviews</Card.Header>
//         <Card.Body>
//           <Card.Title>Username: {getProfile.username}</Card.Title>
//           <Card.Title>Email: {getProfile.email}</Card.Title>
//         </Card.Body>
//         <Card.Footer className="text-muted">
//           Last Login Date: {getProfile.updatedAt}
//         </Card.Footer>
//       </Card>

//     </div>
//   )
// }
// export default ProfilePage
