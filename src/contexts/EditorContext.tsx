import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';

interface EditorContextType {
  content: string;
  setContent: (content: string) => void;
  wordCount: number;
  characterCount: number;
  execCommand: (command: string, value?: string) => void;
  formatBlock: (blockType: string) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState('');
  const editorRef = useRef<HTMLDivElement | null>(null);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const formatBlock = (blockType: string) => {
    document.execCommand('formatBlock', false, blockType);
  };

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const characterCount = content.length;

  return (
    <EditorContext.Provider
      value={{
        content,
        setContent,
        wordCount,
        characterCount,
        execCommand,
        formatBlock,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorContext() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditorContext must be used within an EditorProvider');
  }
  return context;
}