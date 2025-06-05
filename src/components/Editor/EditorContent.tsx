import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useEditorContext } from '../../contexts/EditorContext';

function EditorContent() {
  const { content, setContent } = useEditorContext();
  const editorRef = useRef<HTMLDivElement>(null);
  const savedRange = useRef<Range | null>(null);
  const [isInitial, setIsInitial] = useState(true);

  const saveCaretPosition = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedRange.current = selection.getRangeAt(0).cloneRange();
    }
  };

  const restoreCaretPosition = () => {
    const selection = window.getSelection();
    if (savedRange.current && selection) {
      try {
        selection.removeAllRanges();
        selection.addRange(savedRange.current);
      } catch (e) {
        console.warn('Unable to restore caret:', e);
      }
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    saveCaretPosition();
    setContent(e.currentTarget.innerHTML);
  };

  useLayoutEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
      restoreCaretPosition();
    }
  }, [content]);

  // Set content only once on initial mount
  useEffect(() => {
    if (editorRef.current && isInitial) {
      editorRef.current.innerHTML = content;
      setIsInitial(false);
    }
  }, [content, isInitial]);

  return (
    <div className="editor-content">
      <div
        ref={editorRef}
        className="editor-area"
        contentEditable
        onInput={handleInput}
        onKeyUp={saveCaretPosition}
        onMouseUp={saveCaretPosition}
        suppressContentEditableWarning
      />
    </div>
  );
}

export default EditorContent;
