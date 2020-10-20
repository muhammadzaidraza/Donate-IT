// Donation TABLE
import React from 'react';
import './donation.css'
//import './Dontionform'
import fire from '../firebase/firebase';
import escaperRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      donName: null,
      donCell: null,
      amnt: null,
      donEmail: null,
      victName: null,
      victCell: null,
      victAdd: null
    }
    this.Viewdata = this.Viewdata.bind(this);
  }
  Viewdata(id) {
    let singleData = [];
    let temp = this.props.records;
    for (let index in temp) {
      // {console.log(id)}
      // { console.log(temp[index].id) }
      if (temp[index].id === id) {
        // console.log("hello: ",temp[index])
        this.setState({
          donName: temp[index].donorName,
          donCell: temp[index].donorCell,
          amnt: temp[index].amount,
          donEmail: temp[index].donorEmail,
          victName: temp[index].victimName,
          victCell: temp[index].victimCell,
          victAdd: temp[index].victimAdd
        })
      }
    }
  }

  handleSearch(passedQuery) {
    console.log("in handle search")
    this.setState({
      query: passedQuery.trim()
    })
    console.log(`Query :${this.state.query}`);
  }

  render() {
    let showingData
    if (this.state.query) {
      let match = new RegExp(escaperRegExp(this.state.query), 'i');
      showingData = this.props.records.filter((single) => (match.test(single.donorName)))
    } else {
      showingData = this.props.records;
    }
    return (
      <div>
        <div>
          <aside className="col-md-4" style={{ marginTop: 10, marginBottom: 10 }}>
            <div className="widget search" style={{ display: 'inline', marginBottom: 10 }}>
              <form role="form" >
                <input type="text"
                  className="form-control search_box"
                  autoComplete="off"
                  placeholder="Search Here"
                  onChange={(e) => this.handleSearch(e.target.value)}
                />
              </form>
              <button className="btn btn-primary btn-lg" data-toggle="modal"
                data-target="#openModal" >
                Donate
              </button>
            </div>
          </aside>
          <table>
            <thead>
              <tr className="blackcolor">
                <th>Donor Name</th>
                <th>Donor Cell Number</th>
                <th>Amount</th>
                <th>Email Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {showingData.map((item) => (
                <tr className="blackcolor" key={item.id}>
                  <td>{item.donorName}</td>
                  <td>{item.donorCell}</td>
                  <td>{item.amount}</td>
                  <td>{item.donorEmail}</td>
                  <td>
                    <div className="text-center">
                      <button className="btn btn-primary btn-lg" onClick={(e) => this.Viewdata(item.id)}
                        required="required" data-toggle="modal" data-target="#viewDetailModal"
                      >
                        view Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* View Detail Modal */}
        <div className="modal fade" id="viewDetailModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">Details</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className='Viewdata'>
                <div className="alert alert-success " role="alert">
                  <p style={{ fontSize: 18 }}><span className='names'>Donor Name : </span>{this.state.donName}</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <p style={{ fontSize: 18 }}><span className='names'>Donor Email : </span>{this.state.donEmail}</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <p style={{ fontSize: 18 }} > <span className='names'>Donor Cell : </span>{this.state.donCell}</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <p style={{ fontSize: 18 }} > <span className='names'>Amount : </span>{this.state.amnt}</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <p style={{ fontSize: 18 }} > <span className='names'>victim Name : </span>{this.state.victName}</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <p style={{ fontSize: 18 }} > <span className='names'>Victim Cell : </span>{this.state.victCell}</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <p style={{ fontSize: 18 }} > <span className='names'>Victim Address : </span>{this.state.victAdd}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Table;