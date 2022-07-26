import React, { useState } from 'react'
import Footer from '../../Components/Common/Footer';
import Header from '../../Components/Common/Header';
import TabOptions from '../../Components/Common/TabOptions';
import Delivery from '../../Components/Delivery';
import DiningOut from '../../Components/DiningOut';
import NightLife from '../../Components/NightLife';

const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <div> 
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch(tab) {
    case "Delivery" :
      return <Delivery />

    case "Dining Out" :
      return <DiningOut />

    case "Night Life" :
      return <NightLife />

    default :
      return <Delivery />
  }
}

export default HomePage;