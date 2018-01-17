import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "react-jsonschema-form";

let timer = 0;

class FormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: null,
      uiSchema: null,
      error: null,
      formData: null
    };
  }

  onSubmit = ({ formData }) => console.log("Data submitted: ", formData);
  init(props) {
    let { match } = props;
    // async getDataById
    timer = setTimeout(() => {
      this.setState({
        formData: {
          title: `hhhh=>${match.params.id}`,
          done: true
        }
      });
    }, 2000);
    import(`./uploadView/${match.params.view}.js`)
      .then(({ schema, uiSchema }) => {
        this.setState({
          schema,
          uiSchema,
          error: null
        });
      })
      .catch(e => {
        this.setState({
          error: `没有找到相关上传界面${match.params.view}.js`
        });
      });
  }
  componentWillReceiveProps(nextProps) {
    console.log("wil");
    this.init(nextProps);
  }
  componentDidMount() {
    console.log("did");
    this.init(this.props);
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <div>{this.state.error}</div>
        ) : this.state.schema ? (
          <Form
            schema={this.state.schema}
            uiSchema={this.state.uiSchema}
            formData={this.state.formData}
            onChange={console.log("changed")}
            onSubmit={this.onSubmit}
            onError={console.log("errors")}
          />
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

export default class UploaderView extends Component {
  render() {
    let { match } = this.props;
    return (
      <div>
        <Switch>
          <Route
            path={`${match.url}/:view/:id`}
            render={props => {
              clearTimeout(timer);
              return <FormView {...props} />;
            }}
          />
          <Route
            path={`${match.url}/:view/`}
            render={() => {
              clearTimeout(timer);
              return <h3>缺乏数据源</h3>;
            }}
          />
          <Route
            exact
            path={match.url}
            render={() => {
              clearTimeout(timer);
              return <h3>选一个上传界面吧</h3>;
            }}
          />
        </Switch>
      </div>
    );
  }
}
