import {Stack, Button, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
    return(
        
        <Stack spacing={4}>
            <Stack spacing ={2} direction='row'>
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction ='row'>
                <Button variant='text' color ='primary'>Primary</Button>
                <Button variant='text' color ='secondary'>Secondary</Button>
                <Button variant='text' color ='error'>Error</Button>
                <Button variant='text' color ='warning'>Warning</Button>
                <Button variant='text' color ='info'>Info</Button>
                <Button variant='text' color ='success'>Success</Button>
            </Stack>

            <Stack spacing={2} direction ='row'>
                <Button variant='outlined' color ='primary'>Primary</Button>
                <Button variant='outlined' color ='secondary'>Secondary</Button>
                <Button variant='outlined' color ='error'>Error</Button>
                <Button variant='outlined' color ='warning'>Warning</Button>
                <Button variant='outlined' color ='info'>Info</Button>
                <Button variant='outlined' color ='success'>Success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction ='row'>
                <Button variant='contained' size ='small'>small</Button>
                <Button variant='contained' size ='medium'>medium</Button>
                <Button variant='contained' size ='large'>large</Button>
            </Stack>

            <Stack spacing={2} direction ='row'>
                <Button variant ='contained' startIcon={<SendIcon></SendIcon>}>Send </Button>

                <IconButton 
                aria-label="send" 
                color="warning" 
                disableRipple 
                onClick={() => alert('Clicked')}>
                    <SendIcon></SendIcon>
                </IconButton>
            </Stack>


        </Stack >    
    )
}


export default MuiButton