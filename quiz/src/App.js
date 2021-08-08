import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import QuestionCategory from './pages/QuestionCategory';
import Questions from './pages/Questions';

function App() {
  return (
    <>
      <Container>
         <Router>
           <Route path= '/' component= {QuestionCategory} exact></Route>
           <Route path= '/q/:cate/:dif/:no' component= {Questions} exact></Route>
         </Router>
      </Container>
    </>
  );
}

export default App;
