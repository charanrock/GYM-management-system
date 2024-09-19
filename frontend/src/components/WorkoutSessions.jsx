
const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits and unlock your potential with our expert-led, high-intensity workout sessions designed for all fitness levels. Get stronger, faster, and more confident with every rep.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our bootcamps are perfect for those seeking a challenge! Experience a variety of training styles, from strength and conditioning to cardio and endurance, in a supportive and motivating environment.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Full-Body Strength Training</h4>
            <p>
              Build muscle and increase stamina with our full-body bootcamp, focusing on functional movements and resistance training.
            </p>
          </div>
          <div>
            <h4>HIIT Cardio Blast</h4>
            <p>
              Burn calories and boost your metabolism in this high-intensity interval training session, perfect for those short on time but hungry for results.
            </p>
          </div>
          <div>
            <h4>Core Conditioning</h4>
            <p>
              Strengthen your core with targeted exercises that improve balance, posture, and overall stability, helping you perform better in every workout.
            </p>
          </div>
          <div>
            <h4>Mobility and Flexibility Workshop</h4>
            <p>
              Improve your range of motion and prevent injury with our flexibility and mobility bootcamp, designed to enhance your movement patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
