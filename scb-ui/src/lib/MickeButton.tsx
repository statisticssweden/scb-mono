type MickeProps = {    
    title: string
}

export  const MickeButton = (props:MickeProps) => {
    return (<button className="VarningMicke">{props.title}</button>);
};




