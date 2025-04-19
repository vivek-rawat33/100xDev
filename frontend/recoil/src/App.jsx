import { useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/Count";
import {
  JobsAtom,
  MessagingAtom,
  NotificationAtom,
  TotalNotificationSelector,
} from "./store/atoms/store";
import React from "react";
function App() {
  const NotificationsCount = useRecoilValue(NotificationAtom);
  const MessagingCount = useRecoilValue(MessagingAtom);
  const JobsCount = useRecoilValue(JobsAtom);

  const totalNotificationCount = useRecoilValue(TotalNotificationSelector);
  return (
    <div>
      <div>
        <Count />
        <IsEven />
      </div>

      <button>Home</button>
      <button>
        Notifications ({NotificationsCount >= 100 ? "99 +" : NotificationsCount}
        )
      </button>
      <button>Jobs ({JobsCount})</button>
      <button>Messaging ({MessagingCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setcount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setcount((prev) => prev + 1)}>increase</button>
      <button onClick={() => setcount((prev) => prev - 1)}>decrease</button>
    </div>
  );
}
function IsEven() {
  const count = useRecoilValue(evenSelector);
  return <div>{!count ? "this is even" : ""}</div>;
}

export default App;
