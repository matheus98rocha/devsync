import React from 'react';
import { render } from '@testing-library/react';
import SocialMediaIcons from './social-media-icons.components';

describe('SocialMediaIcons', () => {
  test('renders social media icons with labels', () => {
    const { getByText } = render(<SocialMediaIcons />);

    const facebookIcon = getByText('Facebook');
    expect(facebookIcon).toBeTruthy();

    const googleIcon = getByText('Google');
    expect(googleIcon).toBeTruthy();

    const githubIcon = getByText('GitHub');
    expect(githubIcon).toBeTruthy();
  });
});