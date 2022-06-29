import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function Button() {
  return (
    <Stack direction="row" spacing={5}>
      <Avatar alt="Griffindor" src="https://m.media-amazon.com/images/I/915wv-U37QL._AC_SY679_.jpg" sx={{ width: 86, height: 86 }}/>
      <Avatar alt="Ravenclaw" src="https://m.media-amazon.com/images/I/91c9b3pZpXL._AC_SL1500_.jpg" sx={{ width: 86, height: 86  }}/>
      <Avatar alt="Slytherin" src="https://m.media-amazon.com/images/I/913oKbge7IL._AC_SY879_.jpg " sx={{ width: 86, height: 86  }}/>
      <Avatar alt="Hafelpuf" src="https://i.pinimg.com/originals/b2/5a/33/b25a33f290229cc23a0f05f25c41a616.jpg" sx={{ width: 86, height: 86  }}/>
    </Stack>
  );
}

export {Button}