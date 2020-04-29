import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'

import {
    Title,
    Form,
    Repositories,
    Error
} from './styles'

interface Repository {
    full_name: string,
    description: string,
    owner: {
        login: string,
        avatar_url: string
    },
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories')
        if(storagedRepositories) {
            return JSON.parse(storagedRepositories)
        }

        return []
    })

    const [newRepo, setNewRepo] = useState('')
    const [inputError, setInputError] = useState('')

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories])

    useEffect(() => {
        newRepo === '' && setInputError('')
    }, [newRepo])

    async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
        if(!newRepo) {
            return setInputError('Digite o autor/nome do repositório')
        }
        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`)
            setRepositories([...repositories, response.data])
            setNewRepo('')
            setInputError('')
        } catch {
            return setInputError('Repositório não encontrado')
        }
    }

    return (
        <>
        <img src={ logoImg } alt="Github Explorer"/>
        <Title>Explore repositórios no Github</Title>

        <Form hasError={!!inputError} onSubmit={ handleAddRepository }>
            <input
                id="search"
                placeholder="Digite o nome do repositório"
                value={newRepo}
                onChange={ e => setNewRepo(e.target.value) }
            />
            <button type="submit">Pesquisar</button>
        </Form>

        <Error>
            { inputError && <p>{ inputError }</p> }
        </Error>

        <Repositories>
            {
                repositories.map(repo => (
                    <Link to={`/repositories/${repo.full_name}`} key={repo.full_name} >
                        <img src={repo.owner.avatar_url} alt={ repo.owner.login }/>
                        <div>
                        <strong>{ repo.full_name }</strong>
                        <p>{ repo.description }</p>
                        </div>

                        <FiChevronRight  size="20" />
                    </Link>
                ))
            }
        </Repositories>
        </>
        )
    }

    export default Dashboard
