import { Button } from '@mui/material'
import React from 'react'
import ShowFeedback from './ShowFeedback'

const FeedbackHandler = () => {
  return (
    <Button variant="text" LinkComponent={ShowFeedback}>Show All Feedbacks</Button>
  )
}

export default FeedbackHandler