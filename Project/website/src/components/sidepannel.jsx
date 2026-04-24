import React from 'react'
import ActionBar from './addData'
import Colors from '../constants/colors';
import SideBarTabs from './sideBarTabs';
import AddDataForm from './addData';




export default function Sidepannel() {
  return (
    <div style={{display: 'flex', flexDirection: 'column',padding: 10, minWidth: 250, maxWidth: 250,height: 'auto'}}>
      
      {/* Action Bars */}
      <AddDataForm />
      <hr></hr>


      {/* tabs */}
      <SideBarTabs title="Analytics" path="/analytics" />
      <SideBarTabs title="Daily Basis" path="/daily" />
      <SideBarTabs title="Monthly Basis" path="/monthly" />
      
      <hr></hr>
      {/* Settings */}
      <SideBarTabs title="Settings" path="/settings" /> 

    </div>
  )
}