import { MdDeleteForever } from "react-icons/md";
function New({ data, setData, setCityData, citydata }) {
    function del(index, city) {
      let new_arr = [...data];
      setData(new_arr.filter((_, ind) => ind !== index));
  
      let new_data = [...citydata];
      new_data.map((ele) => {
        if (ele.name === city) {
          ele.value = false;
        }
      });
      setCityData(new_data);
    }
  
    return (
      <div className="weather-table-container">
        <table className="weather-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Description</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Data age(hrs)</th>
              <th>
                <MdDeleteForever />
              </th>
            </tr>
          </thead>
  
          {data.map((e, index) => {
            let date = new Date(e.date_and_time);
            let duration = Date.now() - date;
            let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
            return (
              <tbody key={index}>
                <tr className={e.search ? "highlight-row" : ""}>
                  <td>{e.cityName}</td>
                  <td><input type="text" value={e.description}/></td>
                  <td>{e.temp_in_celsius}</td>
                  <td>{e.pressure_in_hPa}</td>
                  <td>{hours}</td>
                  <td>
                    <button onClick={() => del(index, e.cityName)} style={{backgroundColor:"white",border:"none"}}>
                      <MdDeleteForever className="delete-icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
  
        {data.length === 0 && <h1 className="no-data">No Data</h1>}
      </div>
    );
  }
  
  export default New;