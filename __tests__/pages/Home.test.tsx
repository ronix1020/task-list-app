import App from "../../src/navigators/RootNavigator";
import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";

test('Shows the task screen when the user taps the "Tasks" button', async () => {
    render(<App />);

    fireEvent.press(screen.getByTestId('TaskButton'));

    expect(screen.getByTestId('newTaskText')).toBeOnTheScreen();
});


test('Shows the list screen when the user taps the "List" button', async () => {
    render(<App />);

    fireEvent.press(screen.getByTestId('ListButton'));

    waitFor(() => {
        expect(screen.getByTestId('ListTitle')).toBeOnTheScreen();
    });
});