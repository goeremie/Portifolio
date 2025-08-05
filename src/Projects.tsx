import React from "react";
import AI1 from "./assets/AI1.png";
import AI2 from "./assets/AI2.png";
import HH1 from "./assets/HH1.png";
import HH2 from "./assets/HH2.png";
import HH3 from "./assets/HH3.png";

const Projects: React.FC = () => {
  return (
    <div className="p-6">
      {/* AI Quiz Builder Project */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">AI Quiz Builder</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <img
              style={{ paddingRight: "10px" }}
              src={AI1}
              alt="AI Quiz Builder Screenshot 1"
              className="rounded-lg shadow-md"
            />
            <img
              style={{ paddingLeft: "10px" }}
              src={AI2}
              alt="AI Quiz Builder Screenshot 2"
              className="rounded-lg shadow-md"
            />
          </div>
          <div
            className="space-y-4"
            style={{
              marginTop: "25px",
              paddingTop: "25px",
              paddingBottom: "25px",
              fontWeight: "bold",
              border: "5px dotted green",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <p className="text-lg">
              The AI Training Quiz Builder is a web-based application developed
              by Computer Science students at Thompson Rivers University for
              their final capstone project, in partnership with Innomergence
              Solutions.
            </p>
            <p className="text-lg">
              Its primary goal is to automate the creation of training quizzes
              from emergency preparedness documents. Users can upload various
              file types (PDF, Word, PowerPoint, plain text), which are parsed
              by a Python backend and analyzed using OpenAI’s GPT-4 API to
              generate quiz questions.
            </p>
            <p className="text-lg">
              The frontend—built using HTML, CSS, JavaScript, and PHP—offers a
              responsive interface for uploading files, taking quizzes, and
              reviewing results. Firebase handles secure authentication and
              real-time data storage.
            </p>
            <p className="text-lg">
              Additionally, a custom voice control feature was implemented for
              hands-free navigation. The project evolved with agile development
              practices and now includes Firebase Authentication and an Apache
              web server for deployment.
            </p>
            <p className="text-lg">
              The final product is a scalable platform that helps emergency
              organizations assess readiness with AI-generated quizzes. Try it
              live at{" "}
              <a
                href="https://quizbuilder.kunovo.ai"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                quizbuilder.kunovo.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Hire Horizon Project */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Hire Horizon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <img
              style={{ paddingRight: "10px" }}
              src={HH1}
              alt="Job Tracker Screenshot 1"
              className="rounded-lg shadow-md"
            />
            <img
              style={{ paddingLeft: "10px" }}
              src={HH2}
              alt="Job Tracker Screenshot 2"
              className="rounded-lg shadow-md"
            />
            <img
              style={{ paddingLeft: "10px" }}
              src={HH3}
              alt="Job Tracker Screenshot 3"
              className="rounded-lg shadow-md"
            />
          </div>
          <div
            className="space-y-4"
            style={{
              marginTop: "25px",
              paddingTop: "25px",
              paddingBottom: "25px",
              fontWeight: "bold",
              border: "5px dotted green",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <p className="text-lg">
              Hire Horizon is a mobile app designed to help job seekers manage
              and track their job applications efficiently. It addresses common
              challenges such as losing track of application stages and missing
              follow-up deadlines.
            </p>
            <p className="text-lg">
              Built using Kotlin in Android Studio, the app follows the MVVM
              (Model-View-ViewModel) architecture for clean separation of
              concerns and scalable development.
            </p>
            <p className="text-lg">
              The app features a user-friendly dashboard showing totals for
              applications, interviews, offers, and rejections. Users can add,
              edit, delete, and view job applications, each with details like
              title, company, status, and dates.
            </p>
            <p className="text-lg">
              It includes smart search, filter, and sort functionalities, along
              with customizable light and dark themes for a personalized
              experience.
            </p>
            <p className="text-lg">
              Firebase, a NoSQL cloud solution, is used for real-time data
              synchronization and secure authentication via Google or
              email/password. Offline access is supported through Room Database
              integration. Reminder notifications also help users to stay on top
              of interviews and follow-ups.
            </p>
            <p className="text-lg">
              Overall, Hire Horizon provides a structured and seamless way to
              navigate the job hunt with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
