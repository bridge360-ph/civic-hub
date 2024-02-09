import {
  IonContent,
  IonPage,
  IonModal,
  IonButton,
  IonBackButton
} from '@ionic/react';
import React, { useRef, useState } from 'react';
import MainHeader from '../../components/MainHeader';

// TODO: find a solution
// type TicketType = 'complaint' | 'feedback' | 'suggestion';

const Ticket: React.FC = () => {
  const [ticket_type, setTicketType] = useState('complaint');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('low');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const handleSubmit = () => {
    if (!(ticket_type || description)) {
      alert('Please Provide all fields');
      return;
    }

    try {
      setLoading(true);

      // Simulating form submission

      setTimeout(() => {
        setLoading(false);
        setResponse(true);
        setTicketType('complaint');
        setCategory('');
        setPriority('');
        setLocation('');
        setDescription('');
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IonPage>
      <MainHeader />
      <IonContent>
        <h4 className="text-center capitalize text-base mt-10">
          Submit a ticket
        </h4>

        {/* Ticket Form */}

        <div className="flex flex-col items-center justify mt-14">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md px-6"
          >
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-50 text-sm font-bold mb-2"
              >
                Type:
              </label>
              <select
                id="type"
                value={ticket_type}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTicketType(e.target.value)
                }
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500 text-xs"
                style={{ width: '100%' }}
                required
              >
                <option value="complaint">Complaint</option>
                <option value="feedback">Feedback</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>

            {/* Category */}

            {ticket_type === 'complaint' && (
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-50 text-sm font-bold mb-2"
                >
                  Category:
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500 text-xs"
                  style={{ width: '100%' }}
                >
                  <option value="">Select category...</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="noise">Noise</option>
                  <option value="parking">Parking</option>
                </select>
              </div>
            )}

            {/* Priority */}

            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-gray-50 text-sm font-bold mb-2"
              >
                Priority:
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500 text-xs"
                style={{ width: '100%' }}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-50 text-sm font-bold mb-2"
              >
                Location:
              </label>

              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500 text-black text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-50 text-sm font-bold mb-2"
              >
                Description:
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500 text-black text-sm"
                placeholder={`${ticket_type === 'complaint' ? 'Enter your complaint...' : ticket_type === 'feedback' ? 'Enter your feedback...' : 'Enter your suggestions...'}`}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                onClick={() => {
                  if (!ticket_type || !description)
                    return alert('Please fill all fields');

                  handleSubmit();
                }}
                className="bg-blue-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 text-sm rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>

          {response && (
            <IonModal ref={modal} isOpen={response}>
              <IonContent>
                <div id="container">
                  <p className="text-gray-50">Ticket submitted successfully!</p>
                  <div className="w-full flex items-center justify-center self-center my-3">
                    <p className="text-gray-50 text-center block max-w-[300px]">
                      A barangay official will be reaching out to you shortly if
                      need be. Please keep your lines open.
                    </p>
                  </div>
                  <p className="text-gray-50">Thank you!</p>

                  <button
                    className="bg-blue-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 text-sm rounded focus:outline-none focus:shadow-outline mt-7"
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

export default Ticket;
