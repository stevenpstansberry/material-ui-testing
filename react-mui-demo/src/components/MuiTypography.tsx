import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>subtitle 1</Typography>
      <Typography variant='subtitle2'>subtitle 2</Typography>

      <Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ratione, atque aspernatur ea quis, ab iusto quia temporibus fugit suscipit, consectetur perferendis illum illo itaque. Aspernatur, soluta at! Suscipit, natus.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet suscipit officiis asperiores nulla earum sapiente nisi tenetur nihil voluptates incidunt, quidem laborum, rem sed fugit sequi vel et? Eveniet!</Typography>

    </div>
  )
}

export default MuiTypography
