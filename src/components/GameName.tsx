import React from 'react';
import './GameName.css';

interface GameNameProps {
    name: string;
}

export const GameName = ({name}: GameNameProps) => {
  return (
    <h1 className="text-center gameName">***{name}***</h1>
  )
}
