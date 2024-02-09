import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useState } from 'react';
import MainHeader from '../../components/MainHeader';

type content = {
  key: number;
  date: string;
  headline: string;
  content: string;
};

interface ContentProps {
  contents: content[];
}

function Content({ contents }: ContentProps) {
  const [expandedContent, setExpandedContent] = useState<number | null>(null);

  const toggleExpanded = (key: number) => {
    setExpandedContent(expandedContent === key ? null : key);
  };

  return (
    <IonCardContent className="flex flex-col gap-2">
      {contents.map((content) => (
        <div
          key={content.key}
          className="p-2 rounded bg-stone-800 text-zinc-300"
        >
          <IonText>
            {expandedContent === content.key
              ? content.content
              : `${content.content.slice(0, 100)}...`}
          </IonText>
          <p>{content.type === 'straw'}</p>
          {content.content.length > 100 && (
            <button
              className="mt-2 text-blue-500 hover:underline"
              onClick={() => toggleExpanded(content.key)}
            >
              {expandedContent === content.key ? 'See less' : 'See more...'}
            </button>
          )}
        </div>
      ))}
    </IonCardContent>
  );
}

const announcements = [
  {
    key: 1,
    date: new Date().toDateString(),
    headline: 'New Garbage Collection Schedule',
    content:
      'Please be advised that starting next week, the Barangay Waste Management Division will implement a new schedule for garbage collection. Kindly refer to the updated schedule posted on our official website or inquire at the Barangay Hall for more details. Thank you for your cooperation.'
  },
  {
    key: 2,
    date: new Date().toDateString(),
    headline: 'Road Repair Notice',
    content:
      'To all residents, we would like to inform you that road repairs will commence on [Date]. Please expect temporary road closures and traffic diversions in affected areas. Your understanding and patience during this period are highly appreciated.'
  },
  {
    key: 3,
    date: new Date().toDateString(),
    headline: 'Community Clean-up Drive',
    content:
      "Join us this Saturday for a community clean-up drive! Let's work together to keep our Barangay clean and green. Meeting point will be at the Barangay Hall at 8:00 AM. Don't forget to bring your own cleaning materials and water. See you there!"
  }
];

const news = [
  {
    key: 1,
    date: new Date().toDateString(),
    headline: 'Breaking News: New Health Protocols Implemented',
    content:
      "In response to the recent surge in COVID-19 cases, the Barangay Council has implemented new health protocols to ensure the safety of our residents. These protocols include mandatory mask-wearing in public spaces, strict adherence to social distancing measures, and increased sanitation efforts in community areas. Let's all do our part to curb the spread of the virus and protect our community."
  },
  {
    key: 2,
    date: new Date().toDateString(),
    headline: 'Road Closure Announcement',
    content:
      'Please be informed that a portion of Main Street will be temporarily closed for repairs starting tomorrow. The closure will affect the stretch from Barangay Hall to the intersection with Secondary Road. Motorists are advised to take alternative routes during this period. We apologize for any inconvenience caused and thank you for your cooperation.'
  },
  {
    key: 3,
    date: new Date().toDateString(),
    headline: 'Community Vaccination Drive',
    content:
      "Great news, everyone! The Barangay Health Center will be conducting a community vaccination drive next weekend. COVID-19 vaccines will be administered to eligible residents free of charge. Registration will be open starting tomorrow at the Barangay Hall. Let's all take this opportunity to protect ourselves and our loved ones."
  }
];

const polls = [
  {
    key: 1,
    date: new Date().toDateString(),
    headline: 'Public Opinion Poll: Proposed Community Park',
    choices: ['Support', 'Oppose', 'Undecided']
  },
  {
    key: 2,
    date: new Date().toDateString(),
    headline: 'Survey: Waste Management Improvement',
    choices: [
      'Strongly Agree',
      'Agree',
      'Neutral',
      'Disagree',
      'Strongly Disagree'
    ]
  }
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <MainHeader />

      <IonContent className="ion-padding" fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Announcements</IonCardTitle>
          </IonCardHeader>

          <Content contents={announcements} />
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>News</IonCardTitle>
          </IonCardHeader>

          <Content contents={news} />
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Polls</IonCardTitle>
          </IonCardHeader>

          <IonCardContent className="flex flex-col gap-2">
            {polls.map((poll) => {
              return (
                <div
                  key={poll.key}
                  className="p-2 rounded bg-stone-800 text-zinc-300"
                >
                  <IonText>
                    <h2>{poll.headline}</h2>
                    <h3>{poll.date}</h3>
                  </IonText>
                  <form className="mt-6">
                    <div className="flex flex-col gap-8 mb-6 sm:flex-row">
                      {poll.choices.map((choice, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <input
                            type="radio"
                            id={`option-${i}`}
                            name="poll_option"
                            value={`option-${i}`}
                            className="mr-2"
                          />
                          <label htmlFor={`option-${i}`}>{choice}</label>
                        </div>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Vote
                    </button>
                  </form>
                </div>
              );
            })}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
