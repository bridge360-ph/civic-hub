import React, { useRef, useState } from 'react';
import MainHeader from '../../components/MainHeader';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonText,
  IonAlert,
  IonModal,
  IonBackButton,
  IonLoading
} from '@ionic/react';
import './index.css';

const FormApplication: React.FC = () => {
  const [documentType, setDocumentType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [applyingFor, setApplyingFor] = useState('');
  const [relationship, setRelationship] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!documentType || !applyingFor) {
      setError(true);
    }

    try {
      setLoading(true);

      // Simulating form submission

      setTimeout(() => {
        setLoading(false);
        setError(false);
        setResponse(true);
        setDocumentType('');
        setMobileNumber('');
        setName('');
        setEmail('');
        setApplyingFor('');
        setRelationship('');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonPage>
      <MainHeader />
      <IonContent>
        <h4 className="mt-10 text-base text-center capitalize">
          Application Form
        </h4>

        <IonAlert
          header="Error"
          isOpen={error}
          message={'Please fill in all required fields'}
          buttons={['Go back']}
          onDidDismiss={() => setError(false)}
        ></IonAlert>

        {loading && (
          <IonLoading
            isOpen={loading}
            message={'Loading...'}
            duration={3000}
            spinner="circles"
          />
        )}

        <div className="flex flex-col items-center mt-14 justify">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md"
          >
            <IonItem>
              <IonLabel position="stacked">Document Type:</IonLabel>
              <IonSelect
                placeholder="Select Document Type"
                value={documentType}
                onIonChange={(e) => {
                  setDocumentType(e.detail.value);
                }}
                interface="action-sheet"
              >
                <IonSelectOption value="residency_permit">
                  Residency Permit
                </IonSelectOption>
                <IonSelectOption value="cedula">Cedula</IonSelectOption>
                <IonSelectOption value="barangay_clearance">
                  Barangay Clearance
                </IonSelectOption>
                <IonSelectOption>More soon..</IonSelectOption>
                {/* Add more document options as needed */}
              </IonSelect>
            </IonItem>

            <IonItem style={{ marginTop: '6px' }}>
              <IonLabel position="stacked">Applying For:</IonLabel>
              <IonSelect
                placeholder="Select One"
                value={applyingFor}
                onIonChange={(e) => {
                  setApplyingFor(e.detail.value);
                }}
                interface="action-sheet"
              >
                <IonSelectOption value="self">Self</IonSelectOption>
                <IonSelectOption value="family-member">
                  Family Member
                </IonSelectOption>
                {/* Add more document options as needed */}
              </IonSelect>
            </IonItem>

            {applyingFor == 'family-member' && (
              <>
                <IonItem style={{ marginTop: '6px' }}>
                  <IonLabel position="stacked">Full Name</IonLabel>
                  <IonInput
                    type="text"
                    name="name"
                    value={name}
                    onIonChange={(e: CustomEvent) => setName(e.detail.value)}
                  />
                </IonItem>

                <IonItem style={{ marginTop: '6px' }}>
                  <IonLabel position="stacked">Relationship</IonLabel>
                  <IonInput
                    type="text"
                    value={relationship}
                    onIonChange={(e: CustomEvent) =>
                      setRelationship(e.detail.value)
                    }
                  />
                </IonItem>

                <IonItem style={{ marginTop: '6px' }}>
                  <IonLabel position="stacked">
                    Email <IonText>(Optional)</IonText>
                  </IonLabel>
                  <IonInput
                    type="text"
                    value={email}
                    onIonChange={(e: CustomEvent) => setEmail(e.detail.value)}
                  />
                </IonItem>

                <IonItem style={{ marginTop: '6px' }}>
                  <IonLabel position="stacked">Mobile Number</IonLabel>
                  <IonInput
                    type="tel"
                    name="mobile"
                    value={mobileNumber}
                    onIonChange={(e: CustomEvent) =>
                      setMobileNumber(e.detail.value)
                    }
                  />
                </IonItem>
              </>
            )}

            <div className="flex flex-row justify-center mt-8">
              <button
                type="submit"
                className="py-2 px-6 text-sm font-bold text-white bg-blue-500 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                {loading ? 'Submitting Application' : 'Submit Application'}
              </button>
            </div>
          </form>

          {response && (
            <IonModal ref={modal} isOpen={response}>
              <IonContent>
                <div className="flex flex-col justify-center items-center min-h-full">
                  <p className="text-gray-50">
                    Request submitted successfully!
                  </p>

                  <div className="flex justify-center items-center self-center my-3 w-full">
                    <p className="block text-center text-gray-50 max-w-[300px]">
                      Your document will be available for pickup/delivery by 1pm{' '}
                      <strong>02/05/2024</strong>
                    </p>
                  </div>

                  <div className="flex justify-center items-center self-center my-3 w-full">
                    <p className="block text-center text-gray-50 max-w-[300px]">
                      Please do note that a barangay official will be reaching
                      out to you shortly if need be. Please keep your lines
                      open.
                    </p>
                  </div>

                  <p className="text-gray-50">Thank you!</p>

                  <button
                    className="py-2 px-6 mt-7 text-sm font-bold text-white bg-blue-500 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                    onClick={() => setResponse(false)}
                  >
                    Go Back <IonBackButton />
                  </button>
                </div>
              </IonContent>
            </IonModal>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FormApplication;
