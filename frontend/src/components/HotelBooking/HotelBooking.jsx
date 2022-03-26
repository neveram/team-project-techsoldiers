import React, { useState, useRef } from 'react';
import hotel3 from '../../media/hotel3.jpg'
import { createStyles, Paper, Image, Button, Text, Title, Grid, Center, Group, ActionIcon, NumberInput, InputWrapper } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));


export function HotelBooking({ links }) {
  const { classes } = useStyles();
  const countHandlers = useRef(null);
 
  let [roomcount, setRoomCount] = useState(
    {
        count: 1
    }
  );
  let setCount = function (value) {
    setRoomCount({ ...roomcount, count: value });
  }

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${hotel3})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {links}
        </Title>
        <InputWrapper mt={30}>
          <Center>
            <Group spacing={5}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>No. of Rooms</Text>
              <ActionIcon size={36} variant="default" onClick={() => countHandlers.current.decrement()}>
                  –
              </ActionIcon>
              <NumberInput
                  hideControls
                  value={roomcount.count}
                  onChange={(val) => setCount(val)}
                  handlersRef={countHandlers}
                  max={10}
                  min={1}
                  step={1}
                  styles={{ input: { width: 54, textAlign: 'center' } }}
              />
              <ActionIcon size={36} variant="default" onClick={() => countHandlers.current.increment()}>
                  +
              </ActionIcon>
            </Group>
          </Center>
        </InputWrapper>
      </div>
      <Button variant="white" color="dark">
        BOOK NOW
      </Button>
    </Paper>
  );
}