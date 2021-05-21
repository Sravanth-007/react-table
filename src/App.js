import React,{components} from 'react'
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import './components/a.css'



function App() {


    const data = [
        {
            NAME:'KUMAR',
            AGE:20,
            ADDRESS:'ADRESS 1',
            PHONENO:1234567899,
            EMAIL:'KUMAR@gmail.com',
            key:1
        },
        {
            NAME:'Karthik',
            AGE:20,
            ADDRESS:'ADRESS 2',
            PHONENO:9866512345,
            EMAIL:'karthik@gmail.com',
            key:2
        },
        {
            NAME:'KIRAN',
            AGE:22,
            ADDRESS:'ADRESS 3',
            PHONENO:9866554321,
            EMAIL:'kIRAN@gmail.com',
            key:3
        },
        {
            NAME:'MURALI',
            AGE:17,
            ADDRESS:'ADRESS 4',
            PHONENO:7386012345,
            EMAIL:'MURALI@gmail.com',
            key:4
        },
        {
            NAME:'JULIET',
            AGE:24,
            ADDRESS:'ADRESS 5',
            PHONENO:7382225345,
            EMAIL:'JULIET@gmail.com',
            key:5
        },
    ];


    const columns = [
        {
          title: 'NAME',
          dataIndex: 'NAME',
          key: 'NAME',
        },
        {
          title: 'AGE',
          dataIndex: 'AGE',
          key: 'AGE',
          sorter: (a,b) =>a.AGE -b.AGE,
        },
        {
          title: 'ADDRESS',
          dataIndex:'ADDRESS',
          key: 'ADDRESS',
        },
        {
            title: 'PHONENO',
            dataIndex: 'PHONENO',
            key: 'PHONENO',
          },
          {
            title: 'EMAIL',
            dataIndex: 'EMAIL',
            key: 'EMAIL',
          },
      ];


  return (
  <div className="container"> 
  <header >
  <Table  dataSource={data}  columns={columns}>


  </Table>
  </header>
  
  </div>
 
  );
}

export default App;
