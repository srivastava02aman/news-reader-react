import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import "./NewsSources.css";
import { setNewsSource } from "../../actions/newsActions";
import { getNewsSources } from "../../actions/newsActions";

class NewsSources extends Component {
  state = {
    newsSource: []
  };
  componentDidMount() {
    this.props.getNewsSources();
  }

  onClick = () => {
    this.props.setNewsSource(this.state.newsSource);
  };
  onChange = selectedOptions => {
    if (selectedOptions) {
      this.setState({ newsSource: selectedOptions });
    }
  };

  render() {
    if (this.props.news.allSources)
      return (
        <div>
          <Select
            defaultValue={[]}
            onChange={this.onChange}
            isMulti
            name="newsSource"
            options={this.props.news.allSources}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <button onClick={this.onClick}>Submit</button>
        </div>
      );
    else return <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { setNewsSource, getNewsSources }
)(NewsSources);