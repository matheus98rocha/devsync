export const githubApi = async (user: string, token: string): Promise<Response> => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`, {
            headers: {
                Authorization: token,
            },
        });
        return response;
    }
    catch {
        console.log("Error while trying to fetch the github api data...")
    }
};