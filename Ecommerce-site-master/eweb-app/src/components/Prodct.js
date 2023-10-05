import { Button, CardActions, CardContent, CardMedia, Typography,FormControl,Box,InputLabel,Select,MenuItem,FormHelperText,} from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function Prodct({product}) {
    const [size, setsize] = React.useState('');

  const handleChange = (event) => {
    setsize(event.target.value);
  };
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  
  return (
    <>
    <CardMedia
        sx={{ height: 200,padding:10}}
        
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between',alignItems: 'baseline' }}>
      <FormControl sx={{ minWidth: 120}} size="small" >
        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value={10}>{product.varients[0]}</MenuItem>
          <MenuItem value={20}>{product.varients[1]}</MenuItem>
          <MenuItem value={30}>{product.varients[2]}</MenuItem>
        </Select>
        <FormHelperText>size</FormHelperText>
      </FormControl>
      <FormControl sx={{minWidth: 120 }} size="small">
        <Select
          value={size}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
            
          <MenuItem value={10}>{product.prices[0]}</MenuItem>
          <MenuItem value={20}>{product.prices[1]}</MenuItem>
          <MenuItem value={30}>{product.prices[2]}</MenuItem>
        </Select>
        <FormHelperText>price</FormHelperText>
      </FormControl>

        <Button size="medium" variant="outlined">Add to Cart</Button>
      </CardActions>
    </>
  )
}
