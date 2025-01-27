test("should send message", () => {
    const { getByPlaceholderText, getByText } = render(<ChatInput />);
    fireEvent.changeText(getByPlaceholderText("Type your message..."), "Hello");
    fireEvent.press(getByText("Send"));
    expect(mockDispatch).toHaveBeenCalled();
  });