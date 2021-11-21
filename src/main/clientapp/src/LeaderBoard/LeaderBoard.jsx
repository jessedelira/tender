import React from 'react';
import { Table } from 'react-bootstrap';
const LeaderBoard = () => {
    
  //Array of JSON elements. Need to query the DB here.
  const myResturaunts = [
        {key: 1, name: "Umi", score: 4.2},
        {key: 2, name: "Don Hall's", score: 4.1},
        {key: 3, name: "Firehouse Subs", score: 4}
      ];


  //Returns HTML for each row
  const renderLeaderboard = (resturaunt, index) => {
    return(
          <tr>
            <td>{resturaunt.key}</td>
            <td>{resturaunt.name}</td>
            <td>N/A</td>
            <td>{resturaunt.score}</td>
          </tr>
    )
  }

  return (

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Restaurant</th>
            <th>Type</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {myResturaunts.map(renderLeaderboard)}
        </tbody>
      </Table>
    )
}

export default LeaderBoard;