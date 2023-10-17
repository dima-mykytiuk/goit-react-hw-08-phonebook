import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContactItems } from "../../redux/contacts/selectors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { deleteContact } from "../../redux/contacts/operations";
import ParticlesBg from "particles-bg";

export default function MultiActionAreaCard() {
  const contacts = useSelector(selectVisibleContactItems);
  const dispatch = useDispatch();
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '25px',
      justifyContent: 'center',
    }}>
      {contacts.map((contact) => (
        <Card sx={{ maxWidth: '338px', backgroundColor: '#E6F7FF', width: '338px', border: '1px solid #000' }}>
          <CardActionArea>
            <CardContent
              style={{ display: 'flex', flexDirection: 'row', gap: '2px', textAlign: 'center', padding: '0px' }}>
              <AccountCircleIcon sx={{ bgcolor: '#003366', height: '100%', width: '33%', color: 'white' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', padding: '4px 7px', gap: '8px' }}>
              <Typography variant="body1" color="#003366">
                Name: {contact.name}
              </Typography>
              <Typography variant="body2" color="#003366"> {/* Измените на "body2" */}
                Phone: {contact.number}
              </Typography>
              </div>
              <Button onClick={() => {
                dispatch(deleteContact(contact.id))
              }} size="small" sx={{
                position: 'absolute',
                bottom: 4,
                backgroundColor: '#003366',
                color: 'white',
                width: '12px',
                height: '25px',
                right: '5px',
                ':hover': { backgroundColor: 'red', color: '#fff' }
              }}>
                Delete
              </Button>
            </CardContent>

          </CardActionArea>
          <ParticlesBg color="#003366" type="cobweb" bg={true} />
        </Card>
      ))}
    </div>
  );
}
