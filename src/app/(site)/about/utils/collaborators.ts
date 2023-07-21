import React from 'react';
import { githubApi } from '../services/githubApi';
import { CollaboratorsTypes } from './collaborators.types';

const projectCollaborators = (contributors: CollaboratorsTypes[]) => {
    const [collaborators, setCollaborators] = React.useState<CollaboratorsTypes[]>(contributors);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async (user: string, index: number) => {
            const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN as string;
            const response = await githubApi(user, token);

            const data = await response.json();
            setCollaborators((prevCollaborators) => {
                const updatedCollaborators = [...prevCollaborators];
                updatedCollaborators[index] = { ...updatedCollaborators[index], avatar: data.avatar_url };
                return updatedCollaborators;
            });
        };

        const fetchAllCollaborators = async () => {
            const promises = collaborators.map((contributor, index) =>
                fetchData(contributor.user, index)
            );
            await Promise.all(promises);
            setIsLoading(false);
        };

        fetchAllCollaborators();
    }, []);

    return { collaborators, isLoading };
};

export default projectCollaborators;