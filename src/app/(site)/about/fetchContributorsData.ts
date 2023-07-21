import { useState, useEffect } from 'react';
import { githubApi } from './services/githubApi';

export interface Contributor {
    user: string;
    avatar: string;
}

const fetchContributorsData = (contributors: Contributor[]) => {
    const [contributorsData, setContributorsData] = useState<Contributor[]>(contributors);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (user: string, index: number) => {
            try {
                const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN as string;
                const response = await githubApi(user, token);
        
                if (response.status === 200) {
                    const data = await response.json(); 
                    setContributorsData((prevData) => {
                        const updatedContributors = [...prevData];
                        updatedContributors[index].avatar = data.avatar_url;
                        return updatedContributors;
                    });
                } else {
                    throw new Error(`Error fetching avatar for ${user}: ${response.status}`);
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
        

        const fetchAllContributorsData = async () => {
            const promises = contributorsData.map((contributor, index) =>
                fetchData(contributor.user, index)
            );
            await Promise.all(promises);
            setIsLoading(false);
        };

        fetchAllContributorsData();
    }, []);

    return { contributorsData, isLoading };
};

export default fetchContributorsData;