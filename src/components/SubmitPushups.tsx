import React, { useState } from 'react';
import { IonItem, IonInput, IonLabel, IonButton } from '@ionic/react';

interface SubmitPushupsProps {
  onSubmit: (newValue: number) => void; // Callback to submit the value
}

const SubmitPushups: React.FC<SubmitPushupsProps> = ({ onSubmit }) => {
  const [quantity, setQuantity] = useState<number>(0); // State to hold the input value

  const handleInputChange = (event: CustomEvent) => {
    const newValue = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(newValue, 0);
  
    if (!isNaN(parsedValue)) {
      setQuantity(parsedValue); // Update input value in state if it's a valid number
    } else {
      setQuantity(0); // Set quantity to 0 if the input value is not a valid number
    }
  };

  const handleSubmit = () => {
    if (quantity !== 0) {
      onSubmit(quantity); // Pass the input value to the parent component only if it's not zero
      setQuantity(0); // Reset input value after submission
    }
      
  };
  

  return (
    <div>
      <IonItem>
        <IonLabel>Quantity</IonLabel>
        <input type="number" value={quantity} onChange={handleInputChange}></input>
      </IonItem>
      <IonButton className="ion-margin-top" onClick={handleSubmit} expand="block">
        Submit
      </IonButton>
    </div>
  );
};

export default SubmitPushups;
