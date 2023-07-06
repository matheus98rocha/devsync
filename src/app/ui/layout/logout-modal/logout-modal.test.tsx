import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogoutModal from './logout-modal.component';

describe('Logout Modal', () => {
    const mockOnLogout = jest.fn();
    const mockOnCancel = jest.fn();

    test('calls onLogout and onCancel when buttons are clicked', () => {
        render(
            <LogoutModal
                handleLogout={mockOnLogout}
                handleCancel={mockOnCancel}
            />
        );

        const logoutButton = screen.getByText('Desconectar');
        const cancelButton = screen.getByText('Cancelar');

        // Simulate button clicks
        logoutButton.click();
        cancelButton.click();

        expect(mockOnLogout).toHaveBeenCalledTimes(1);
        expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
});