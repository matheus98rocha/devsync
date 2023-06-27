import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SocialMediaIcons from './social-media-icons.components';

describe('SocialMediaIcons', () => {
  test('renders social media icons with labels', () => {
    const handleClickFacebook = jest.fn();
    const handleClickGithub = jest.fn();
    const handleClickGoogle = jest.fn();

    const { getByText } = render(
      <SocialMediaIcons
        handleClickFacebook={handleClickFacebook}
        handleClickGithub={handleClickGithub}
        handleClickGoogle={handleClickGoogle}
      />
    );

    const facebookIcon = getByText('Facebook');
    expect(facebookIcon).toBeTruthy();
    fireEvent.click(facebookIcon);
    expect(handleClickFacebook).toHaveBeenCalled();

    const googleIcon = getByText('Google');
    expect(googleIcon).toBeTruthy();
    fireEvent.click(googleIcon);
    expect(handleClickGoogle).toHaveBeenCalled();

    const githubIcon = getByText('GitHub');
    expect(githubIcon).toBeTruthy();
    fireEvent.click(githubIcon);
    expect(handleClickGithub).toHaveBeenCalled();
  });
});
