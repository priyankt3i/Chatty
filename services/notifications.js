import * as Notifications from "expo-notifications";

export const scheduleNotification = async (title, body) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: "default"
    },
    trigger: null // Send immediately
  });
};