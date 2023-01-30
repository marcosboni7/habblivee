import { render, screen } from '@testing-library/react';
import Player from '.';

describe('Player test', () => {
    it('renders without crashing', () => {
        render(<Player />);

        const player = screen.queryByTestId('test_player');

        expect(player).not.toBeNull();
    });
});