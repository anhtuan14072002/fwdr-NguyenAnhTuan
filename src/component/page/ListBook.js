import React from 'react';
import '../../css/ListBook.css'
import { FaStar } from "react-icons/fa";
function ListBook(props){
  return (
    <>
    <div className='allbook'>
        <div className='listabook'>
            Lite of Pi
        </div>
        <div className='listauthor'>
            <span><b>Devan</b></span>
        </div>
    </div>
    <div className='allbook'>
        <div className='listabook'>
        <FaStar />Học code today
        </div>
        <div className='listauthor'>
        <span><b>fpt</b></span>
        </div>
    </div><div className='allbook'>
        <div className='listabook'>
        <FaStar />Learn Angular by example
        </div>
        <div className='listauthor'>
        <span><b>Fpt-Aptech</b></span>
        </div>
    </div><div className='allbook'>
        <div className='listabook'>
        Họ nhà trai
        </div>
        <div className='listauthor'>
        <span><b>Nguyễn Anh Tuấn</b></span>
        </div>
    </div><div className='allbook'>
        <div className='listabook'>
        <FaStar /> Đôi mắt có lửa
        </div>
        <div className='listauthor'>
        <span><b>Nguyễn Hùng Sơn</b></span>
        </div>
    </div>
    
    </>
  );
};

export default ListBook;
