import React from "react";

export const Menu = ({running, runHandler, randomHandler, clearHandler}) => {
  const buttonsOptions = [
    {
      onClick: runHandler,
      label: running ? 'Stop' : 'Start'
    },
    {
      onClick: randomHandler,
      label: 'Randomize'
    },
    {
      onClick: clearHandler,
      label: 'Clear'
    }
  ];

  const renderButtons = () => buttonsOptions.map(({onClick, label}) => <button key={label}
                                                                               onClick={onClick}>{label}</button>)

  return (<menu type="context" id="popup-menu" className="game" style={{
      position: "fixed",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      bottom: 10,
      right: 10,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 50,
      boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
    }}>
      {renderButtons()}
    </menu>
  )
}