import { render, screen } from "@testing-library/react";
import Footer from '.';

describe('Footer test', () => {
    it('renders without crashing', () => {
        render(<Footer />)

        const footer = screen.queryByTestId('test_footer');

        expect(footer).not.toBeNull();
    });
});