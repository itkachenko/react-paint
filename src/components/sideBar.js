import React, { Component } from 'react';
import { saveState } from '../localStorage';
import { getDoc } from '../actions/index';
import connect from "react-redux/es/connect/connect";

class SideBar extends Component {
  newDocAmount = [];
  documentsList;

  constructor(props) {
    super(props);

    // render documents on page init
    if (this.props.documents && this.props.documents.length) {
      this.documentsList = SideBar.renderDocuments(this.props.documents);

      this.state = {
        documents: this.props.documents
      };
    } else {
      this.state = {
        documents: []
      };
    }

    this.onAddNewDocument = this.onAddNewDocument.bind(this);
  }

  static renderDocuments(docsList) {
    return docsList.map((doc) => {
      return (
        <li key={doc}>
          <button>
            {doc}
          </button>
        </li>
      );
    });
  }

  onAddNewDocument() {
    console.log(this.state.documents);
    const docs = this.state.documents;
    this.newDocAmount = docs.concat(docs.length + 1);

    this.setState({
      documents: this.newDocAmount
    });

    saveState({
      documents: this.newDocAmount
    });

    if (this.state.documents && this.state.documents.length) {
      console.log('2');
      this.documentsList = SideBar.renderDocuments(this.state.documents);
    }
  };

  render() {
    return (
      <div className="side-bar">
        <div className="side-bar__head">
          <h2>Document</h2>
          <button onClick={this.onAddNewDocument}>New</button>
        </div>
        <div className="side-bar__body">
          { this.documentsList ? (
              <ul>
                {this.documentsList}
              </ul>
            ) : (
              <span>
                ...
              </span>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { documents: state.documents };
}

export default connect(mapStateToProps, { getDoc })(SideBar);
