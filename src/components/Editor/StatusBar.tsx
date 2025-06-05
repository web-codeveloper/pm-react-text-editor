import React from 'react';
import { useEditorContext } from '../../contexts/EditorContext';

function StatusBar() {
  const { wordCount, characterCount } = useEditorContext();

  return (
    <div className="status-bar">
      <div>Words: {wordCount}</div>
      <div>Characters: {characterCount}</div>
    </div>
  );
}

export default StatusBar;