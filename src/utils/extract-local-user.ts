import { GithubUser, LocaleGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocaleGithubUser => ({
    login: user.login,
    id: user.id,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    bio: user.bio,
    location: user.location,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at,
})