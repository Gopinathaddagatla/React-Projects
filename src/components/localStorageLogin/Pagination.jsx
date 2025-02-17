import React from 'react'
import {Link} from 'react-router-dom'

function Pagination({currentPage, setCurrentPage, npage, numbers}) {
        function prevPage(){
            if(currentPage !== 1){
                setCurrentPage(currentPage - 1);
            }
          }
          function changeCpage(id){
            setCurrentPage(id)
          }
          function nextPage(){
            if(currentPage !== npage){
                setCurrentPage(currentPage + 1)
            }
          }
          
  return (
    <div>
        <ul className='pagination d-flex justify-content-end'>
            <li className='page-item'>
                <Link className='page-link' onClick={prevPage}>Prev</Link>
            </li>
            {numbers.map((n, i)=>{ 
                return (<li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <Link href="#" className='page-link' onClick={()=>changeCpage(n)}>{n}</Link>
                </li>)
            })
            }
            <li className='page-item'>
                <Link href="#" className='page-link' onClick={nextPage}>Next</Link>
            </li>
        </ul>
    </div>
  )
}

export default Pagination