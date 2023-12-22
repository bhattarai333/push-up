import React, { useRef } from 'react';
import { IonInput, IonButton } from '@ionic/react';

interface SubmitPushupsProps {
  onSubmit: (newValue: number) => void; // Callback to submit the value
}

const SubmitPushups: React.FC<SubmitPushupsProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLIonInputElement>(null); // Create a ref for IonInput

  const handleSubmit = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value; // Get value from the IonInput
      const parsedValue = parseInt(inputValue || '0', 10); // Parse value to number
      console.log(parsedValue); // Log the parsed value (use it or pass to onSubmit)
      onSubmit(parsedValue)
    }
  };

  return (
    <div>
      <IonInput
        label="Quantity"
        labelPlacement='stacked'
        type="number"
        ref={inputRef} // Assign ref to IonInput
      ></IonInput>
      <IonButton className="ion-margin-top" onClick={handleSubmit} expand="block">
        Submit
      </IonButton>
    </div>
  );
};

export default SubmitPushups;
