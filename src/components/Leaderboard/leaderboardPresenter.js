import React, { Component, PropTypes } from 'react';
import Paginate from 'react-paginate';

class Leaderboard extends Component {

  componentWillMount() {
    this.props.getEntry(10, 0);
  }

  handlePageClick(data) {
    this.props.getEntry(10, data.selected * 10);
  }

  handleRowClick(userId) {
    if (userId === this.props.user.id) {
      this.props.history.push('/');
    } else {
      this.props.history.push(`/userprofile/${userId}`);
    }
  }

  render() {
    let userElem = [];
    let rankPageMod = 0;

    if (this._page !== undefined) {
      rankPageMod = this._page.state.selected * 10;
    }
    if (this.props.leaderboard[0] !== undefined) {
      for (let i = 0; i < this.props.leaderboard[0].length; i++) {
        userElem.push(<tr key={i} onClick={this.handleRowClick.bind(this, this.props.leaderboard[0][i].id)} className="leaderTableRow">
          <td className="hidden-xs">
              {(i + 1) + rankPageMod}
          </td>
          <td>
            <div className="media">
              <div className="media-left">
              </div>
              <div className="media-body">
                <div className="media-heading">
                  {this.props.leaderboard[0][i].name}
                </div>
              </div>
            </div>
          </td>
          <td>
            {this.props.leaderboard[0][i].level}
          </td>
          <td>
            {this.props.leaderboard[0][i].totalXp}
          </td>
          <td>
            {this.props.leaderboard[0][i].win}
          </td>
          <td>
            {this.props.leaderboard[0][i].lose}
          </td>
        </tr>);
      }
    }
    return (
      <section>
        <h1>Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th className="">
                Rank
              </th>
              <th className="">
                Username
              </th>
              <th className="">
                Level
              </th>
              <th className="">
                TotalXP
              </th>
              <th className="">
                Wins
              </th>
              <th className="">
                Loses
              </th>
            </tr>
          </thead>
          <tbody>
            {userElem}
          </tbody>
        </table>
        <Paginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          pageNum={Math.ceil(this.props.leaderboard[1] / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick.bind(this)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          ref={(c) => this._page = c}
        />
      </section>
    );
  }

}

export default Leaderboard;

Leaderboard.propTypes = {
  getEntry: PropTypes.func.isRequired,
  leaderboard: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
