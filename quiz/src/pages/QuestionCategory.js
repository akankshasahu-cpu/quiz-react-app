import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';

const QuestionCategory = ({ history }) => {
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [qNo, setQNo] = useState(0);

  const fetchQuestionCategories = async () => {
    const { data } = await axios.get(`https://opentdb.com/api_category.php`);
    console.log(setCats)
    setCats(data.trivia_categories);
  };
  useEffect(() => {
    fetchQuestionCategories();
  }, []);

  const submitHandler = () => {
    if (
      parseInt(qNo) > 15 ||
      parseInt(qNo) < 1 ||
      cat === '' ||
      difficulty === ''
    ) {
      alert(' Please give proper input !');
    } else {
      const url = `/q/${cat}/${difficulty}/${qNo}`;
      history.push(url);
    }
  };

  return (
    <div>
      <Card style={{ marginTop: '150px' }} className='card'>
        <CardHeader
          title='Ready for quiz '
          titleTypographyProps={{ variant: 'h3' }}
          style={{
            textAlign: 'center',
            backgroundColor: 'blue',
            color: 'white',
          }}
        ></CardHeader>
        <CardContent>
          <TextField
            select
            label='Select'
            defaultValue=''
            onChange={(e) => setCat(e.target.value)}
            helperText='Please select category'
            className='inputText'
            variant='outlined'
          >
            {cats.map((c) => {
              return (
                <MenuItem key={c.id} value={c.id}>
                  {c.name}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            select
            label='Select'
            defaultValue=''
            className='inputText'
            onChange={(e) => setDifficulty(e.target.value)}
            helperText='Please select defficulty'
            variant='outlined'
          >
            <MenuItem value='easy'>Easy</MenuItem>
            <MenuItem value='medium'>Medium</MenuItem>
            <MenuItem value='hard'>Hard</MenuItem>
          </TextField>

          <TextField
            id='outlined-basic'
            label='Number Of Questions ( 1 - 15 )'
            variant='outlined'
            type='number'
            name='number'
            className='inputText'
            onChange={(e) => setQNo(e.target.value)}
          />
          <Button
            variant='contained'
            className='button-submit'
            style={{ fontSize: '25px', marginTop: '20px' }}
            color='primary'
            onClick={submitHandler}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionCategory;
