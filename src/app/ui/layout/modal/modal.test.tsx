import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './modal.component';

describe('Modal', () => {
    const mockOnLogout = jest.fn();
    const mockOnCancel = jest.fn();
    const modalTitle = 'Modal test';
    const modalMessage = 'This is a test modal';
    const logoutButtonType = 'primary';
    const cancelButtonType = 'alert';
    const isOnMobile = false;

    test('renders modal with correct title and message', () => {
        render(
            <Modal
                onLogout={mockOnLogout}
                onCancel={mockOnCancel}
                modalTitle={modalTitle}
                modalMessage={modalMessage}
                logoutButtonType={logoutButtonType}
                cancelButtonType={cancelButtonType}
                isOnMobile={isOnMobile}
            />
        );

        const titleElement = screen.getByText(modalTitle);
        const messageElement = screen.getByText(modalMessage);

        expect(titleElement).toBeInTheDocument();
        expect(messageElement).toBeInTheDocument();
    });

    test('calls onLogout and onCancel when buttons are clicked', () => {
        render(
            <Modal
                onLogout={mockOnLogout}
                onCancel={mockOnCancel}
                modalTitle={modalTitle}
                modalMessage={modalMessage}
                logoutButtonType={logoutButtonType}
                cancelButtonType={cancelButtonType}
                isOnMobile={isOnMobile}
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