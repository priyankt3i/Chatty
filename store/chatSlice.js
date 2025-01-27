const chatSlice = createSlice({
    name: "chat",
    initialState: {
      messages: [],
      isTyping: false,
      theme: "light",
      botConfig: {
        name: "AI Assistant",
        avatar: "https://example.com/bot.png"
      }
    },
    reducers: {
      addMessage: (state, action) => {
        state.messages.push({ ...action.payload, id: uuid.v4() });
      },
      clearChat: (state) => {
        state.messages = [];
      },
      toggleTheme: (state) => {
        state.theme = state.theme === "light" ? "dark" : "light";
      }
    }
  });