const ChatInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
  
    const handleSend = async () => {
      if (message.trim()) {
        dispatch(addMessage({ role: "user", content: message }));
        dispatch(setTyping(true));
        
        try {
          const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-4",
              messages: [{ role: "user", content: message }]
            },
            { headers: { Authorization: `Bearer ${OPENAI_KEY}` } }
          );
          
          dispatch(addMessage({ role: "assistant", content: response.data.choices[0].message.content }));
        } catch (error) {
          showErrorToast("Failed to get response");
        }
        dispatch(setTyping(false));
      }
    };
  
    return (
      <View className="p-4 bg-white dark:bg-gray-800">
        <TextInput
          className="flex-1 p-2 border rounded-lg"
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    );
  };