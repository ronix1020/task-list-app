import App from "../src/navigators/RootNavigator";
import { act } from "@testing-library/react-native";
import renderer from 'react-test-renderer';

test('Renders correctly', async () => {
    let wrapper: renderer.ReactTestRenderer | null = null;
    await act(async () => {
        wrapper = renderer.create(
            <App />
        )
    })

    expect(wrapper!.toJSON()).toMatchSnapshot();
});