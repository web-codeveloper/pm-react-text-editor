import React from 'react';
import { EditorProvider } from './contexts/EditorContext';
import Editor from './components/Editor/Editor';
// import {EditorProvider, Editor} from "pm-react-text-editor"
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </div>
  );
}

export default App;