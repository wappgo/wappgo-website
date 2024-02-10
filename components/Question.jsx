import Image from "next/image";
import "../styles/Question.css";
const Question = () => {
  return (
    <main className="question-container">
      <h6>Questions</h6>
      <h2>Frequently Asked Questions</h2>
      <article className="row">
        <div className="col-lg-12">
          <h4>Innovation</h4>
          <img src="/assets/question-arrow-right.svg" />
        </div>
        <div className="col-lg-12">
          <h4>Design</h4>
          <img src="/assets/question-arrow-right.svg" />
        </div>
        <div className="col-lg-12">
          <h4>Operations</h4>
          <img src="/assets/question-arrow-right.svg" />
        </div>
        <div className="col-lg-12">
          <h4>Maintenance</h4>
          <img src="/assets/question-arrow-right.svg" />
        </div>
      </article>
    </main>
  );
};

export default Question;
