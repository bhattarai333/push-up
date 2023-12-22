import React, { useState } from 'react';
import { IonContent, IonNote, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import SubmitPushups from '../components/SubmitPushups';
import DialView from '../components/DialView';
import './PersonalGoals.css';


const PersonalTab: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(0); // State to hold the current value

  const handleFormSubmit = (newValue: number) => {
    setCurrentValue(newValue+currentValue); // Update the current value in state
  };
  const currentDate = getFormattedDate()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Goals</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTitle className="centered">{currentDate}</IonTitle>
        <DialView min={0} max={100} current={currentValue}></DialView>
        <SubmitPushups onSubmit={handleFormSubmit}></SubmitPushups>
        
      </IonContent>
    </IonPage>
  );
};




const getFormattedDate = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentDate = new Date();
  const monthName = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const suffix = getOrdinalSuffix(day); // Function to get the ordinal suffix

  return `${monthName} ${day}${suffix}`;
};

const getOrdinalSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export default PersonalTab;
