import React from "react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      jobId: "20121",
      description:
        "Join as a Senior Software Engineer and take a leadership role in designing and developing robust software solutions. Bring your expertise in coding, debugging, and architecting scalable applications. Mentor junior developers, participate in code reviews, and contribute to the overall technical direction of the team. Your contributions will shape the future success of our products.",
      experience: "7+ years",
      responsibilities:
        "Lead the design, development, and maintenance of scalable software solutions. Collaborate with cross-functional teams to define technical requirements and specifications. Identify and address performance bottlenecks, bugs, and other technical issues. Mentor and guide junior developers, fostering a culture of knowledge sharing. Stay updated on industry trends and technologies to recommend improvements and optimizations.",
    },
    {
      title: "Full Stack Developer",
      jobId: "20110",
      description:
        "Join a cutting-edge tech company as a Senior Full Stack Developer. Leverage your expertise in front-end and back-end technologies to contribute to the development of innovative software solutions. Collaborate with cross-functional teams and play a key role in shaping the future of our products.",
      experience: "at least 6 years",
      responsibilities:
        "Build responsive and user-friendly web applications from concept to implementation. Collaborate with UX/UI designers to create seamless and visually appealing interfaces. Design and implement server-side logic and database interactions. Troubleshoot, debug, and optimize code to ensure application performance. Stay informed about industry trends and contribute ideas for continuous improvement.",
    },
    {
      title: "Data Scientist",
      jobId: "20100",
      description:
        "We are hiring a Data Scientist to drive actionable insights from our vast datasets. Apply your statistical and machine learning expertise to uncover patterns and trends. Work closely with cross-functional teams to inform business decisions and contribute to the company's data-driven strategy.",
      experience: "3-4 years",
      responsibilities:
        "Analyze large datasets to extract meaningful insights and patterns. Develop and implement statistical models and machine learning algorithms. Collaborate with cross-functional teams to define data requirements and objectives. Design and execute experiments, analyze results, and present findings to stakeholders. Stay updated on advancements in data science and contribute to the development of best practices.",
    },
    {
      title: "DevOps Engineer",
      jobId: "20098",
      description:
        "Exciting opportunity for a DevOps Engineer to play a crucial role in our infrastructure and deployment processes. Implement and manage continuous integration/continuous deployment (CI/CD) pipelines. Collaborate with development and operations teams to optimize efficiency and ensure the reliability and scalability of our systems.",
      experience: "8+ years",
      responsibilities:
        "Implement and manage continuous integration and deployment (CI/CD) pipelines. Automate manual processes for efficiency and reliability in software delivery. Collaborate with development and operations teams to troubleshoot issues and optimize processes. Ensure the security, scalability, and reliability of infrastructure and applications. Stay informed about DevOps best practices and technologies for ongoing improvements.",
    },
  ];

  const renderCareers = () => {
    let elements = jobOpenings.map((item) => {
      return (
        <div>
          <p className="title">
            {item.title} <span>| Req Id: {item.jobId}</span>
          </p>
          <p className="description">{item.description}</p>
          <p className="experience">
            <span>Exp:</span> {item.experience}
          </p>
          <p className="experience">
            <span>Responsibilities:</span> {item.responsibilities}
          </p>
        </div>
      );
    });
    return elements;
  };
  return <div className="careers">{renderCareers()}</div>;
};

export default Careers;
