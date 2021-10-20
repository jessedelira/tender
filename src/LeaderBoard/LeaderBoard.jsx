import React from 'react';
import { Table } from 'react-bootstrap';
const LeaderBoard = () => {
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
    <tr>
      <td>1</td>
      <td>Cluckin' Bell</td>
      <td>Fried Chicken / Mexican</td>
      <td>10.0</td>
    </tr>
    <tr>
      <td>2</td>
      <td>KFC</td>
      <td>Fried Chicken</td>
      <td>9.6</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Krusty Krab</td>
      <td>Seafood? / Pizza</td>
      <td>9.2</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Pizza Planet</td>
      <td>Pizza</td>
      <td>8.5</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Whataburger</td>
      <td>burger mhmm</td>
      <td>7.21</td>
    </tr>
    <tr>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
    </tr>
    <tr>
      <td>..</td>
      <td>..</td>
      <td>..</td>
      <td>..</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>9999</td>
      <td>Chum Bucket</td>
      <td>Chum</td>
      <td>0.01</td>
    </tr>

  </tbody>
</Table>
    )
}

export default LeaderBoard;