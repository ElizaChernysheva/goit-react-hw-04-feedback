import { useState } from "react";
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

 const App = () => {
     const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0});
     const {good,bad,neutral} = feedback;
     const  total = good + bad + neutral;
     const positiveFeedback = !good ? 0: Number((good * 100 / total).toFixed(1))

  const handleOnClick = (event) =>{
   const {name} = event.currentTarget;
      setFeedback((prevState)=>{
       return {
         ...prevState,
         [name]:prevState[name] + 1,
       }
     })
   }

    return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleOnClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ?
          <Statistics good={good}
                      neutral={neutral}
                      bad={bad}
                      total={total}
                      positivePercentage={positiveFeedback}
          /> :
          <Notification message="There is no feedback"/>
        }

      </Section>
    </div>
    );
};

export default App;

