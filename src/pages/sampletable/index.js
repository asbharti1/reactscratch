import React, { useState, useEffect } from "react";
import { Layout,Card} from "antd";
const {Content} = Layout;
function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  return (   
    
    <table cellPadding="10" cellSpacing="0" style={{width:"100%"}}>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Body</th>
          <th>Title</th>
        </tr>
      </thead>

      <tbody>
        {data.map((val, index) => (
          <tr key={index}>
            <td>{val.userId}</td>
            <td>{val.title}</td>
            <td>{val.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
   
  );
}

export default Employee;
