import React from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'

const MuiTextField = () => {
  return (
    <Stack spacing = {4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined'/>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='standard'/>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' size ='small'/>
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard'/>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Form Input' variant='filled' required error/>
        <TextField
         label='Password'
         variant='outlined'
         helperText='cbt'
         type='password'  
          />

      </Stack>

    </Stack>
  )
}

export default MuiTextField
