import React from 'react'

const TabOptions = ({activeTab, setActiveTab}) => {
  return (
    <div>
      <button onClick={() => setActiveTab("Night Life")}>On Click</button>
    </div>
  )
}

export default TabOptions;