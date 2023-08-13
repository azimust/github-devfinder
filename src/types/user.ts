export type LocaleGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: null,
    blog: string,
    bio: null,
    location: string,
    repos: number,
    followers: number,
    following: number,
    created: string,
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: null,
    blog: string,
    bio: null,
    location: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

export type GithubError = {
    message: string,
    documentation_url: string
}