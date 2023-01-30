import { render, screen } from "@testing-library/react";
import Header from '.';

describe('Header test', () => {
    it('renders without crashing', () => {
        render(<Header />)

        const header = screen.queryByTestId('test_header');

        expect(header).not.toBeNull();
    });
});