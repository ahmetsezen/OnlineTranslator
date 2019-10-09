import React from 'react';

class History extends React.Component {
    render() {
      return (
        <div className="well">
            <h3>Search History</h3>
            <ul className="list-group text-left">
                {
                    this.props.histories.map((item,index) => (
                        <li key={index} className="list-group-item" style={{marginBottom:"10px"}}>
                            <div>
                                <strong>
                                    {item.fromLang} -> {item.toLang}
                                </strong>
                            </div>
                            <br></br>
                            <div>
                                <strong className="text-success">
                                    {item.fromText}
                                </strong>
                                <strong> : </strong>
                                <strong className="text-info">
                                    {item.toText}
                                </strong>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
      )
    }
  }

export default History;