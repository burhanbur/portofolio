import React from 'react';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, description, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={2}>
         <Box 
            component={'img'} 
            src={image} 
            alt={'mockup'} 
            maxWidth={'300px'} 
            width={'100%'} 
            height={'auto'} 
            borderRadius={'15px'} 
            boxShadow={'0 4px 6px rgba(0, 0, 0, 0.1)'} 
            mb={2} 
         />
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box 
            textAlign={'justify'} 
            fontSize={'1rem'} 
            lineHeight={1.6} 
            px={4} 
            py={2} 
            maxWidth={'90%'} 
            margin={'0 auto'}>
            {description}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;