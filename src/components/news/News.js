import React from 'react'
import { Container } from 'reactstrap'
import NewsList from './NewsList'
import NewsModal from './NewsModal'
import API from './../../modules/API/API'
import UserSession from '../../modules/User/UserSession';

export default class News extends React.Component {

  state = {
    news: [],
    friendNews: []
  }

  // Fetches all articles from the database and adds them to state.
  newsLog = () => {
    let newState = {}
    let userId = UserSession.getUser()
    return API.getData(`news?userId=${userId}`)
      .then(news => newState.news = news)
      .then(() => this.setState(newState))
  }

  // Gathers articles saved by friends of current user.
  friendNewsLog = () => {
    console.log(this.props.friendsArray)
    // The following code creates an array of all friend's articles, but cannot set state.

    // let friendArticles = []
    // this.props.friendsArray.map((friend) =>
    //   API.getData(`news?userId=${friend.id}`)
    //     .then(article => friendArticles.push(article))
    //     .then(console.log(friendArticles))
    // )

    // The following code can only return one article, state is being overwritten

    let friendState = {}
    this.props.friendsArray.map((friend) =>
      API.getData(`news?userId=${friend.id}`)
      .then(friendNews => friendState.friendNews = friendNews)
      .then(console.log(friendState))
      .then(() => this.setState(friendState))
      )
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
    this.friendNewsLog()
  }

  render() {
    return (
      <Container>
        <h1 className="text-center mt-5">News Around the 'Berg!</h1>
        <NewsModal saveArticle={this.saveArticle} />
        <NewsList news={this.state.news} handleDelete={this.handleDelete} editArticle={this.editArticle}  friendNews={this.state.friendNews} />
      </Container>)
  }
}
