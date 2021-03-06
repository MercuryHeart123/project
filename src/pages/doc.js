import React from 'react'
import './css/doc.css'
import {NavBtnLink} from '../Navbar/NavbarElements'
const doc = () => {
    return (
        <div className="box1">
          <h1>Documents</h1>
          <p>เว็บไซต์นี้จะแบ่งเป็น 3 ส่วนใหญ่ๆ คือ</p>
          <br/>
          <p>1. การดูไฟล์ภาพ dcm (DICOM) บนเว็บไซต์</p>
          <p>โดยเว็บไซต์ได้ใช้ <a href="https://github.com/cornerstonejs">cornerstone.js</a> เป็น library หลักในการแสดงผลไฟล์ dcm ขึ้นบนเว็บไซต์</p>
          <br/>
          <p>2. การอัพโหลดไฟล์ภาพ dcm ขึ้นมาบนเว็บไซต์</p>
          <NavBtnLink style={{
            width: '6vw',
            fontSize: '1vw',
            textAlign:'center',
            
          }}>Upload</NavBtnLink>
          <p style={{paddingTop:'2vh'}}>ถ้าหากกดลงไปที่ปุ่มลักษณะนี้ที่ตำแหน่งขวาบนของ Nav bar จะทำการอัพโหลดไฟล์ได้</p>
          <br/>
          <p>3. การดูไฟล์ .csv โดยใช่ <a href='https://www.chartjs.org/'>chart.js</a> ในการแสดงผลกราฟและใช้ <a href='https://www.papaparse.com/'>papaparse</a> ในการ parse csv เป็น JSON</p>
        </div>
    )
}

export default doc
