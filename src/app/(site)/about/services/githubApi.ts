export const githubApi = async (user: string, token: string): Promise<Response> => {
    const response = await fetch(`https://api.github.com/users/${user}`, {
        headers: {
            Authorization: token,
        },
    });
    return response;
};