import React, { ReactNode } from 'react';

interface ToolbarButtonProps {
  icon: ReactNode;
  tooltip: string;
  onClick?: () => void;
}

function ToolbarButton({ icon, tooltip, onClick }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      className="toolbar-button"
      onClick={onClick}
      title={tooltip}
    >
      {icon}
    </button>
  );
}

export default ToolbarButton;