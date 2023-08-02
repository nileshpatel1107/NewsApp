import React from 'react'

import Newscomponent from './Ncomponent';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';
import { useState } from 'react'
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalresult, setTotalresult] = useState(0);
    const [page, setPage] = useState(1);


    const cat = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updatenews = async () => {
        props.progress(30)
        let url = ` https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=15fe8b68135647f1b431901a359c8869&page=1&pagesize=${props.pagesize}`
        setLoading(
            true
        )
        props.progress(50)

        let data = await fetch(url)
        let parsedata = await data.json()
        props.progress(80)



        setArticles(
            parsedata.articles
        )
        setLoading(false
        )

        setTotalresult(
            parsedata.totalresult
        )



        props.progress(100)

    }
    useEffect(() => {
        updatenews();
    }, [])


    const fetchMoreData = async () => {
        setPage(page + 1
        )

        let url = ` https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=15fe8b68135647f1b431901a359c8869&page=${page + 1}&pagesize=${props.pagesize}`
        setLoading(true
        )
        let data = await fetch(url)
        let parsedata = await data.json()
        setArticles(
            articles.concat(parsedata.articles)
        )
        setTotalresult(parsedata.totalresult
        )
        setLoading(false)

    }
    // nextp = async () => {
    //     console.log("next")

    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0e72ba283e50488cb24c16b71162e90a&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
    // this.setState({ loading: true })

    //     let data = await fetch(url)
    //     let parsedata = await data.json()
    //     this.setState({ loading: false })

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedata.articles,
    //         totalResults: parsedata.totalResults

    //     })
    // }
    // prep = async () => {
    //     console.log("pre")

    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0e72ba283e50488cb24c16b71162e90a&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    //     // let url=`https://newsapi.org/v2/everything?q=tesla&from=2022-09-06&category=${this.props.category}&apiKey=0e72ba283e50488cb24c16b71162e90a`
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parsedata = await data.json()
    //     this.setState({ loading: false })

    //     this.setState({
    //         articles: parsedata.articles,
    //         page: this.state.page - 1

    //     })
    // }


    return (
        <div className='container my-3'>
            <h1 className='text-center my-3'>Top-headlines about {cat(props.category)}</h1>
            <div className="container">

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalresult}
                    loading={<Spinner />}
                >

                    <div className="row">
                        {/* {this.state.loading && <Spinner />} */}
                        {articles.map((el) => {
                            return <div className="col md-4" key={el.url}>

                                <Newscomponent title={el.title} description={el.description} url={el.urlToImage} nurl={el.url} author={el.author} publishedAt={el.publishedAt} />
                            </div>
                        })
                        }
                        {/* <div className="button d-flex justify-content-between">
                    <button type="button" className="btn btn-dark bi bi-arrow-left" disabled={this.state.page <= 1}
                    onClick={this.prep} >&larr;Previous</button>
                    <button onClick={this.nextp} disabled={this.state.page + 1 >= (Math.ceil((this.state.totalResults) / this.state.pagesize))} type="button" className="btn btn-dark bi bi-arrow-right" >Next &rarr;</button>
                </div> */}
                    </div>
                </InfiniteScroll>
            </div>


        </div >
    )

}

export default News