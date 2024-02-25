import React from 'react';
import CandidateTest from './components/CandidateTest';  

const App: React.FC = () => {
  return (
    <div>
      <CandidateTest
        key="organisation"
        replaceBy="_none"
        targetParentDepth={0}
        targetSelector=""
        transform="n"
        underline={true}
        popup="desktop"
        byClick={false}
      >
        Organisation
      </CandidateTest>

      <br />

      <CandidateTest
        key="exec"
        replaceBy="_none"
        targetParentDepth={0}
        targetSelector=""
        transform="n"
        underline={true}
        popup="desktop"
        byClick={false}
      >
        Exec
      </CandidateTest>

      <br />

      <CandidateTest
        key="seni"
        replaceBy="_none"
        targetParentDepth={0}
        targetSelector=""
        transform="n"
        underline={true}
        popup="desktop"
        byClick={false}
      >
        Seni 
      </CandidateTest>
    </div>
  );
};

export default App;
