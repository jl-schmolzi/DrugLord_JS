"use strict";

interface ActionButtonProps{
    name: string;
    onClick?: () => void;
    current: boolean;
}

function ActionButton({name, onClick, current}: ActionButtonProps){
    const color: string = (current )? "success" : "secondary";
    return <button className={"btn btn-" + color} onClick={onClick}> {name}</button>;
}

export default ActionButton;