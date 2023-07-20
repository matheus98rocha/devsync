// fetchContributorsData.ts

import { useState, useEffect } from 'react';

interface Contributor {
  user: string;
  avatar: string;
}

const fetchContributorsData = (contributors: Contributor[]) => {
  const [contributorsData, setContributorsData] = useState<Contributor[]>(contributors);

  useEffect(() => {
    const fetchData = async (username: string, index: number) => {
      try {
        const token = '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';
        const response = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setContributorsData((prevData) => {
            const updatedContributors = [...prevData];
            updatedContributors[index].avatar = data.avatar_url;
            return updatedContributors;
          });
        } else {
          throw new Error(`Error fetching avatar for ${username}: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
        setContributorsData((prevData) => {
          const updatedContributors = [...prevData];
          updatedContributors[index].avatar = '';
          return updatedContributors;
        });
      }
    };

    contributorsData.forEach((contributor, index) => {
      fetchData(contributor.user, index);
    });
  }, []);

  return contributorsData;
};

export default fetchContributorsData;