import React, { ReactNode } from 'react';

interface ToolbarGroupProps {
  children: ReactNode;
}

function ToolbarGroup({ children }: ToolbarGroupProps) {
  return (
    <div className="toolbar-group">
      {children}
    </div>
  );
}

export default ToolbarGroup;