import React from 'react';
import ToolbarGroup from './ToolbarGroup';
import ToolbarButton from './ToolbarButton';
import Dropdown from './Dropdown';
import { useEditorContext } from '../../contexts/EditorContext';
import {
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Heading1, Heading2, Link, Image, Table, Undo, Redo
} from 'lucide-react';

function Toolbar() {
  const { execCommand, formatBlock } = useEditorContext();

  const handleBlockChange = (value: string) => {
    formatBlock(value);
  };

  const handleLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const handleImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      execCommand('insertImage', url);
    }
  };

  return (
    <div className="toolbar">
      <ToolbarGroup>
        <Dropdown
          options={[
            { label: 'Paragraph', value: 'p' },
            { label: 'Heading 1', value: 'h1' },
            { label: 'Heading 2', value: 'h2' },
            { label: 'Heading 3', value: 'h3' },
            { label: 'Heading 4', value: 'h4' },
            { label: 'Heading 5', value: 'h5' },
            { label: 'Heading 6', value: 'h6' },
          ]}
          onChange={handleBlockChange}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton icon={<Bold size={18} />} tooltip="Bold" onClick={() => execCommand('bold')} />
        <ToolbarButton icon={<Italic size={18} />} tooltip="Italic" onClick={() => execCommand('italic')} />
        <ToolbarButton icon={<Underline size={18} />} tooltip="Underline" onClick={() => execCommand('underline')} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton icon={<AlignLeft size={18} />} tooltip="Align Left" onClick={() => execCommand('justifyLeft')} />
        <ToolbarButton icon={<AlignCenter size={18} />} tooltip="Align Center" onClick={() => execCommand('justifyCenter')} />
        <ToolbarButton icon={<AlignRight size={18} />} tooltip="Align Right" onClick={() => execCommand('justifyRight')} />
        <ToolbarButton icon={<AlignJustify size={18} />} tooltip="Justify" onClick={() => execCommand('justifyFull')} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton icon={<List size={18} />} tooltip="Bullet List" onClick={() => execCommand('insertUnorderedList')} />
        <ToolbarButton icon={<ListOrdered size={18} />} tooltip="Numbered List" onClick={() => execCommand('insertOrderedList')} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton icon={<Link size={18} />} tooltip="Insert Link" onClick={handleLink} />
        <ToolbarButton icon={<Image size={18} />} tooltip="Insert Image" onClick={handleImage} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton icon={<Undo size={18} />} tooltip="Undo" onClick={() => execCommand('undo')} />
        <ToolbarButton icon={<Redo size={18} />} tooltip="Redo" onClick={() => execCommand('redo')} />
      </ToolbarGroup>
    </div>
  );
}

export default Toolbar;