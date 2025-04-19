import { atom, selector } from "recoil";

export const NotificationAtom = atom({
  key: "NotificationAtom",
  default: 112,
});

export const MessagingAtom = atom({
  key: "MessagingAtom",
  default: 56,
});
export const JobsAtom = atom({
  key: "JobsAtom",
  default: 19,
});

//selectors can be derived from other atoms

export const TotalNotificationSelector = selector({
  key: "TotalNotificationSelector",
  get: ({ get }) => {
    const NotificationAtomCount = get(NotificationAtom);
    const MessagingAtomCount = get(MessagingAtom);
    const JobsAtomCount = get(JobsAtom);
    return NotificationAtomCount + JobsAtomCount + MessagingAtomCount;
  },
});
