import { Box, Button, Container, Typography } from '@mui/material'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact }) //  buena practica utilizar el objeto, es extensible

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <Container maxWidth='lg'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        placeItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'system-ui'
      }}
      >
        <Typography variant='h2' color='initial'>
          Kitten Facts
        </Typography>
        <Button variant='contained' onClick={handleClick}>Get new fact</Button>
        {fact && <Typography variant='body1'>{fact}</Typography>}
        {imageUrl && <img src={imageUrl} alt={`image of the ${fact}`} />}

      </Box>
    </Container>
  )
}
