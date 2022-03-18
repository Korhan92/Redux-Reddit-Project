import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import {fetchPosts,receivePosts,selectedSubReddit} from '../actions/index'


class App extends Component {
  handleChange = (subreddit) => {
    this.props.fetchPosts(subreddit)
    this.props.selectedSubReddit(subreddit)
  };
  
//   getMyTime=(lastUpdate) => { 
  //     let d = new Date(lastUpdate);
  //     return d.toLocaleTimeString();
  // }
  
  render() {
    let lastUpdated = new Date()
    console.log(this.props)
    
    return (
      <div>
        <Picker
          value={this.props.reducers.selectedReducer}
          // value={"frontend"}
          
          onChange={this.handleChange}
          options={[
            "reactjs",
            "frontend",
            "javascript",
            "reduxjs",
            "backend",
            "nodejs",
            "mongodb",
            "reduc",
            "undefined",
          ]}
        />
        <p>
          {lastUpdated && (
            <span>
              {/* Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "} */}
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
        </p>
        {/* <Posts posts={posts} /> */}
        <Posts posts={this.props.reducers.receiveReducer} />
      </div>
    );
  }
}




const mapStateToProps = (state) => {return {reducers:state}} ;

const mapDispatchToProps = {fetchPosts,receivePosts,selectedSubReddit}

export default connect(mapStateToProps, mapDispatchToProps)(App)