import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    static defaultProps = {
        country: 'in',
        packageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        packageSize: PropTypes.number,
        category: PropTypes.string
    }

    async updateNews() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a88f568c476465fb5df5c77a31488b7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
    }
    async componentDidMount() {
        // this.setState({ loading: true })
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a88f568c476465fb5df5c77a31488b7&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
        this.updateNews()
    }
    handlePreviousClick = async () => {
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews()
    }
    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews()
    }
    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <div className='container my-3'>
                    <h1 className="text-center">News Hub - Top Headings</h1>

                    <div className="row">
                        {/* {this.articles?.map((item, index) => */}
                        {this.state.articles.map((item, index) =>
                            <div key={index} className="col-md-4">
                                <NewItem source={item.source} author={item.author} date={item.publishedAt} title={item.title ? item.title.slice(0, 45) : ""} description={item.description ? item.description.slice(0, 88) : ""} url={item.urlToImage ? item.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvURrxVdCQ-qh_VmG80K7iMWpsKzuUOrVBA&usqp=CAU"} newsUrl={item.url ? item.url : ""} />
                            </div>
                        )}

                        {/* )} */}
                    </div>
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} type="button" className="btn btn-dark">&larr; previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}