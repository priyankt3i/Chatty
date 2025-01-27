import { FlatList, View } from "react-native";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";

const ChatScreen = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <View className="flex-1 bg-gray-100 dark:bg-gray-900">
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ChatBubble message={item} isUser={item.role === "user"} />
        )}
        keyExtractor={(item) => item.id}
      />
      <ChatInput />
    </View>
  );
};