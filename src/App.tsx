import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Shenmarukai's Portfolio</h1>
      <div className="card">
        <h2>About Me</h2>
        <p>👋 Hi, I’m <strong>Shenmarukai</strong> or <strong>Shane Mulcahy</strong>.</p>
        <p>👀 I’m interested in <strong>mathematics</strong>, <strong>robotics</strong>, <strong>neural networks</strong>, <strong>reverse engineering</strong>, and <strong>game development</strong>.</p>
        <p>The languages I am most proficient in are: <strong>C</strong>, <strong>C++</strong>, <strong>Rust</strong>, <strong>Assembly</strong>.</p>
        <p>The languages I am beginner/intermediate in are: <strong>TypeScript</strong>, <strong>Go</strong>, <strong>Python</strong>.</p>
        <p>I'm currently doing independent research on <strong>robotics</strong>, <strong>neural networks</strong>, and <strong>reverse engineering</strong>.</p>
        <p>📫 You can reach me at:</p>
        <ul>
          <li><strong>Discord</strong>: shenmarukai</li>
          <li><strong>Email</strong>: shanemulc@comcast.net</li>
        </ul>
        <p>Pronouns: <strong>they/them/she/her</strong></p>
        <p>I would:</p>
        <ul>
          <li>Love to make more friends with fellow developers of similar interests!</li>
          <li>Gladly accept help/contributions on any of the projects I am working on!</li>
          <li>Gladly provide help/contributions to other projects if they align with my areas of knowledge!</li>
        </ul>
      </div>
      <div className="card">
        <h2>Current Projects</h2>
        <h3>Bewusstsein Labs</h3>
        <p><a href="https://github.com/BewusstseinLabs" target="_blank" rel="noopener noreferrer">BewusstseinLabs</a> is an organization dedicated to developing complex and performant algorithms for robotics.</p>
        <ul>
          <li><a href="https://github.com/BewusstseinLabs/const-expr-bounds" target="_blank" rel="noopener noreferrer">const-expr-bounds</a></li>
          <li><a href="https://github.com/BewusstseinLabs/memory" target="_blank" rel="noopener noreferrer">memory</a></li>
          <li><a href="https://github.com/BewusstseinLabs/linear-algebra" target="_blank" rel="noopener noreferrer">linear-algebra</a> is a library dedicated to linear algebra.</li>
          <li><a href="https://github.com/BewusstseinLabs/geometric-algebra" target="_blank" rel="noopener noreferrer">geometric-algebra</a></li>
          <li><a href="https://github.com/BewusstseinLabs/calculus" target="_blank" rel="noopener noreferrer">calculus</a></li>
          <li><a href="https://github.com/BewusstseinLabs/probability" target="_blank" rel="noopener noreferrer">probability</a></li>
          <li><a href="https://github.com/BewusstseinLabs/kinematics" target="_blank" rel="noopener noreferrer">kinematics</a> is a library dedicated to kinematics.</li>
          <li><a href="https://github.com/BewusstseinLabs/kinetics" target="_blank" rel="noopener noreferrer">kinetics</a></li>
          <li><a href="https://github.com/BewusstseinLabs/dynamics" target="_blank" rel="noopener noreferrer">dynamics</a> is a library dedicated to dynamics.</li>
          <li><a href="https://github.com/BewusstseinLabs/graphs" target="_blank" rel="noopener noreferrer">graphs</a> is a library dedicated to graph theory and graph-based algorithms.</li>
          <li><a href="https://github.com/BewusstseinLabs/neural-networks" target="_blank" rel="noopener noreferrer">neural-networks</a> is a library dedicated to neural networks.</li>
          <li><a href="https://github.com/BewusstseinLabs/control" target="_blank" rel="noopener noreferrer">control</a></li>
          <li><a href="https://github.com/BewusstseinLabs/robotics" target="_blank" rel="noopener noreferrer">robotics</a> is a library that combines the above libraries into robotics components.</li>
          <li><a href="https://github.com/BewusstseinLabs/bewusstsein" target="_blank" rel="noopener noreferrer">bewusstsein</a></li>
        </ul>
        <h3>OpenJE</h3>
        <p><a href="https://github.com/OpenJE" target="_blank" rel="noopener noreferrer">OpenJE</a> is an organization dedicated to reverse engineering the unreleased Fallout: Van Buren tech demo.</p>
        <ul>
          <li><a href="https://github.com/OpenJE/openje-re" target="_blank" rel="noopener noreferrer">openje-re</a> is a library dedicated to reverse engineering the unreleased Fallout: Van Buren tech demo.</li>
          <li><a href="https://github.com/OpenJE/openje" target="_blank" rel="noopener noreferrer">openje</a> open source Jefferson Engine.</li>
          <li><a href="https://github.com/OpenJE/openvb" target="_blank" rel="noopener noreferrer">openvb</a> open source Fallout: Van Buren.</li>
        </ul>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
