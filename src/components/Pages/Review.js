import React, { useEffect } from 'react';
import Review from '../db/Review.json'
import Info from '../db/MovieInfo.json'

export default function Reviews(){

  const displayReview=Review.map((info) => {
    return(
      <tr> 
        <td style={{color: 'white'}}>{info.Name}</td>
        <td style={{color: 'white'}}>{info.Review}</td>
      </tr>
    )
  });

  const movieInfo=Info.map((results) => {
    return(
      <tr> 
        <td style={{textAlign: 'left', color: 'white'}}>{results.Synopsis}</td>
        <td style={{color: 'white'}}>{results.Cast}</td>
        <td style={{textAlign: 'left',color: 'white'}}>{results.Runtime}</td>
      </tr>
    )
  });

  return (
    <div className="center">
      <div>
      <table class="Info" style={{width:'500px'}}>
        <thead>
          <tr>
            <th style={{textAlign: 'left',color: 'white'}}>Synopsis</th>
            <th style={{color: 'white'}}>Cast</th>
            <th style={{textAlign: 'left',color: 'white'}}>Runtime</th>
          </tr>
        </thead>
        <tbody>
          {movieInfo}
        </tbody>
      </table>
      </div>
      <div>
        <h2 style={{textAlign: 'left', color: 'white'}}>Reviews</h2>
        <table class="review table" style={{width:'300px'}}>
          <thead>
            <tr>
              <th style={{color: 'white'}}>Name</th>
              <th style={{color: 'white'}}>Review</th>
            </tr>
          </thead>
          <tbody>
            {displayReview}
          </tbody>
        </table>
      </div>
    </div>
  )
}
