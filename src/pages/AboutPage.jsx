import React from 'react';
import MainLayout from '../layout/MainLayout';

function AboutPage() {
  return (
    <MainLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        <div className="relative z-10 p-4">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg mb-6">
            Hi, I am Martin Rodriguez, a Web Developer and Programmer from Houston, TX. Currently, I am pursuing my studies in Computer Science with a minor in Software Engineering at the University of Houston. My enthusiasm for learning new technologies and programming languages drives me to continuously improve and tackle challenging projects. I strive to understand every situation deeply and am an active listener, always eager to collaborate and grow.
          </p>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4">Leadership Principles</h3>
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li>
                <strong>Promote Internal Critique, Support Unified Action:</strong> I encourage questioning and critical thinking within the team, but once a decision is made, I fully support and champion it externally.
              </li>
              <li>
                <strong>Listening before acting:</strong> I listen to understand and incorporate feedback.
              </li>
              <li>
                <strong>I hope to be predictable:</strong> I strive to be consistent in principles and predictable for the team.
              </li>
              <li>
                <strong>Directed Independence:</strong> I work with the team to define roadblocks and solve new ideas.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-semibold mb-4">Working Style Preferences</h3>
            <ul className="list-disc list-inside ml-6 space-y-2">
              {/* <li>
                <strong>Emails vs. Slack:</strong> Email for action items, Slack for discussions.
              </li> */}
              <li>
                <strong>I prioritize constructive feedback:</strong> Feedback sessions are structured 10% on positives and 90% on improvement areas.
              </li>
              <li>
                <strong>Direct communication:</strong> I prefer direct communication to avoid misunderstandings.
              </li>
              <li>
                <strong>More communication &gt; less communication:</strong> I prefer receiving regular updates.
              </li>
              <li>
                <strong>I love asking questions:</strong> Asking questions helps me understand logic and decisions.
              </li>
              <li>
                <strong>I am a visual learner:</strong> Visualization helps me understand connections.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;