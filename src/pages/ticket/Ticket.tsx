import {
  IonContent,
  IonPage,
  IonModal,
  IonBackButton,
  IonLoading
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
      console.error(error);
    }
  };

  return (
    <IonPage>
      <MainHeader />

      {loading && (
        <IonLoading
          isOpen={loading}
          message={'Loading...'}
          duration={3000}
          spinner="circles"
        />
      )}

      <IonContent>
        <h4 className="mt-10 text-base text-center capitalize">
          Submit a ticket
        </h4>

        {/* Ticket Form */}

        <div className="flex flex-col items-center mt-14 justify">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="px-6 w-full max-w-md"
          >
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-bold text-gray-50"
              >
                Type:
              </label>
              <select
                id="type"
                value={ticket_type}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTicketType(e.target.value)
                }
                className="py-2 px-3 w-full text-xs rounded border border-gray-300 focus:border-indigo-500 focus:outline-none"
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
                  className="block mb-2 text-sm font-bold text-gray-50"
                >
                  Category:
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="py-2 px-3 w-full text-xs rounded border border-gray-300 focus:border-indigo-500 focus:outline-none"
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
                className="block mb-2 text-sm font-bold text-gray-50"
              >
                Priority:
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="py-2 px-3 w-full text-xs rounded border border-gray-300 focus:border-indigo-500 focus:outline-none"
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
                className="block mb-2 text-sm font-bold text-gray-50"
              >
                Location:
              </label>

              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="py-2 px-3 w-full text-sm text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-bold text-gray-50"
              >
                Description:
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="py-2 px-3 w-full text-sm text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:outline-none"
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
                className="py-2 px-6 text-sm font-bold text-white bg-blue-500 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>

          {response && (
            <IonModal ref={modal} isOpen={response}>
              <IonContent>
                <div className="flex flex-col justify-center items-center min-h-full">
                  <p className="text-gray-50">Ticket submitted successfully!</p>
                  <div className="flex justify-center items-center self-center my-3 w-full">
                    <p className="block text-center text-gray-50 max-w-[300px]">
                      A barangay official will be reaching out to you shortly if
                      need be. Please keep your lines open.
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

export default Ticket;
