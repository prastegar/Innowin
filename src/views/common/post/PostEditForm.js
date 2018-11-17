// @flow
/*global __*/

import * as React from "react";
import PropTypes from "prop-types";
import {Confirm} from "../../common/cards/Confirm";
import {PostForm} from "./PostForm";

type PropsPostEditForm = {
  updateFunc: Function,
  deleteFunc: Function,
  hideEdit: Function,
  post: {},
  translate: {},
}
type StatePostEditForm = {
  confirm: boolean,
}

export class PostEditForm extends React.Component<PropsPostEditForm, StatePostEditForm> {

  static propTypes = {
    updateFunc: PropTypes.func.isRequired,
    deleteFunc: PropTypes.func.isRequired,
    hideEdit: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {confirm: false};
  }

  _showConfirm = () => {
    this.setState({confirm: true})
  };

  _cancelConfirm = () => {
    this.setState({confirm: false})
  };

  _remove = () => {
    return this.props.deleteFunc()
  };

  form: ?React.ElementRef<typeof PostForm>

  _save = () => {
    if(this.form && this.form._formValidate()){
      const {post, updateFunc, hideEdit} = this.props;
      const postId = post.id;
      const formValues = this.form._getValues();
      hideEdit()
      return updateFunc(formValues, postId)
    }
  };

  _onSubmit = (e) => {
    e.preventDefault();
    this._save();
    return false;
  };

  render() {
    const {confirm} = this.state;
    const {hideEdit, post} = this.props;
    if (confirm) {
      return <Confirm cancelRemoving={this._cancelConfirm} remove={this._remove}/>;
    }
    return (
      <PostForm onSubmit={this._onSubmit} post={post} postParent={post.post_parent} postIdentity={post.post_identity}
                ref={form => {
                  this.form = form
                }}>
        <div className="col-12 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-danger mr-auto" onClick={this._showConfirm}>
            {__('Delete')}
          </button>
          <button type="button" className="btn btn-secondary mr-2" onClick={hideEdit}>
            {__('Cancel')}
          </button>
          <button type="submit" className="btn btn-success">{__('Save')}</button>
        </div>
      </PostForm>
    )
  }
}