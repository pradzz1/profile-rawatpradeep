import React from 'react';
import Error from './error';
import SectionHeader from './sectionHeader'
import TechStack from './TechStack';
function Slides() {
    const [index, setIndex] = React.useState(0);
    let comp = <Error></Error>;
    let section = <SectionHeader></SectionHeader>;
    const slides = [
      {
          Component : <TechStack></TechStack>,
          text: "We're gonna do 3 fundamental exercises."
      },
      {
          Component: section,
          text: "Do 10 reps. Remember about full range of motion. Don't rush."
      },
      {
          title: comp,
          text: "Squats are important. Remember to keep your back straight."
      },
      {
          title: "Finally, 15 sit-ups",
          text: "Slightly bend your knees. Remember about full range of motion."
      },
      {
          title: "Great job!",
          text: "You made it, have a nice day and see you next time!"
      }
  ];

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    disabled={index === 0}
                    onClick={() => setIndex(0)}
                    className="small outlined"
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                    className="small"
                >
                    
                </button>
                <button
                    data-testid="button-next"
                    onClick={() => setIndex(index + 1)}
                    disabled={index === slides.length - 1}
                    className="small"
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index]["Component"]}</h1>
            </div>
        </div>
    );

}

export default Slides;
