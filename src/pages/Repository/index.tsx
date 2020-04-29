import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import {
    Header,
    RepositoryInfo,
    Issues
} from './styles'

interface RepositoryParams {
    repository: string
}

interface Repository {
    full_name: string
    description: string
    owner: {
        avatar_url: string
        profile_url: string
        login: string
    }
    stargazers_count: number
    forks: number
    open_issues: number
}

interface Issue {
    id: number
    title: string
    html_url: string
    user: {
        login: string
    }
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    const history = useHistory()
    const [repository, setRepository] = useState<Repository | null>(null)
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        async function loadData(): Promise<void> {
            const [repo, issues] = await Promise.all([
                api.get<Repository>(`/repos/${params.repository}`),
                api.get(`/repos/${params.repository}/issues`)
            ])

            setRepository(repo.data)
            setIssues(issues.data)
        }

        loadData()
    }, [history, params.repository])
    return (
        <>
            {
                repository ?
                <>
                    <Header>
                        <img src={ logoImg } alt="GithubExplorer"/>
                        <Link to="/">
                            <FiChevronLeft  size="20" />
                            Voltar
                        </Link>
                    </Header>
                    <RepositoryInfo>
                        <header>
                            <img src={ repository.owner.avatar_url } alt={ repository.owner.login }/>
                            <div>
                                <strong>{ repository.full_name }</strong>
                                <p>{ repository.description }</p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            maximumSignificantDigits: 3
                                        }).format(repository.stargazers_count)
                                    }
                                </strong>
                                <span>Stars</span>
                            </li>
                            <li>
                                <strong>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            maximumSignificantDigits: 3
                                        }).format(repository.forks)
                                    }
                                </strong>
                                <span>Forks</span>
                            </li>
                            <li>
                                <strong>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            maximumSignificantDigits: 3
                                        }).format(repository.open_issues)
                                    }
                                </strong>
                                <span>Issues abertas</span>
                            </li>
                        </ul>
                    </RepositoryInfo>

                    <Issues>
                        { issues.map(issue => (
                            <a href={issue.html_url} target="_blank" key={ issue.id } >
                                <div>
                                    <strong>{ issue.title }</strong>
                                    <p>{ issue.user.login }</p>
                                </div>

                                <FiChevronRight  size="20" />
                            </a>
                        )) }
                    </Issues>
                </>
                :
                    <p>Loading...</p>
            }
        </>
    )
}

export default Repository
