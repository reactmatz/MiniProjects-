'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2, Star, GitFork } from 'lucide-react'

export default function GitHubRepoWiki() {
  const [searchTerm, setSearchTerm] = useState('')
  const [repositories, setRepositories] = useState([])
  const [savedRepos, setSavedRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedReposFromStorage = localStorage.getItem('savedRepos')
    if (savedReposFromStorage) {
      setSavedRepos(JSON.parse(savedReposFromStorage))
    }
  }, [])

  const searchRepositories = async () => {
    if (!searchTerm) return
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
      const data = await response.json()
      setRepositories(data.items)
    } catch (error) {
      console.error('Error fetching repositories:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveRepository = (repo) => {
    const updatedSavedRepos = [...savedRepos, repo]
    setSavedRepos(updatedSavedRepos)
    localStorage.setItem('savedRepos', JSON.stringify(updatedSavedRepos))
  }

  const removeRepository = (repoId) => {
    const updatedSavedRepos = savedRepos.filter(repo => repo.id !== repoId)
    setSavedRepos(updatedSavedRepos)
    localStorage.setItem('savedRepos', JSON.stringify(updatedSavedRepos))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">GitHub Repository Wiki</h1>
      
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search for repositories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={searchRepositories} disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Search'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          {repositories.map(repo => (
            <Card key={repo.id} className="mb-4">
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" /> {repo.forks_count}
                  </span>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" onClick={() => saveRepository(repo)}>
                    Save to Wiki
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Saved Repositories</h2>
          {savedRepos.map(repo => (
            <Card key={repo.id} className="mb-4">
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" /> {repo.forks_count}
                  </span>
                </div>
                <div className="mt-4">
                  <Button variant="destructive" size="sm" onClick={() => removeRepository(repo.id)}>
                    Remove from Wiki
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}