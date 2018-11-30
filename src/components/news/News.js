import React from 'react'
import { Container } from 'reactstrap'
import NewsList from './NewsList'
import NewsModal from './NewsModal'
import API from './../../modules/API/API'

export default class News extends React.Component {

  state = {
    news: []
  }

  // Fetches all articles from the database and adds them to state.
  newsLog = () => {
    let newState = {}
    return API.getData("news")
      .then(news => newState.news = news)
      .then(() => this.setState(newState))
  }

  // Posts new article to database and adds them to state.
  saveArticle = (articleInfo) => {
    API.saveData("news", articleInfo)
      .then(() => {
      return this.newsLog()
    })
  }

  editArticle = (articleInfo, id) => {
    API.editData("news", articleInfo, id)
      .then(() => {
      return this.newsLog()
    })
  }

  // OnClick functionality to delete saved articles
  handleDelete = (id) => {
    API.deleteData("news", id)
      .then(() => API.getData("news"))
      .then((news) =>
        this.setState({ news: news }))
  }

  componentDidMount() {
    this.newsLog()
  }

  render() {
    return (
      <Container>
        <h1 className="text-center mt-5">News Around the 'Berg!</h1>
        <NewsModal saveArticle={this.saveArticle} />
        <NewsList news={this.state.news} handleDelete={this.handleDelete} editArticle={this.editArticle}/>
      </Container>)
  }
}