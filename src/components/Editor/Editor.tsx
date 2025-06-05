import React from 'react';
import Toolbar from './Toolbar';
import EditorContent from './EditorContent';
import StatusBar from './StatusBar';

function Editor() {
  return (
    <div className="editor-container">
      <Toolbar />
      <EditorContent />
      <StatusBar />
    </div>
  );
}

export default Editor;